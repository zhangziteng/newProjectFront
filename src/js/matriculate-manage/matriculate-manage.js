/*招募管理 */
var examinee_condition = {} //条件查询的内容
$(function () {
    tableInit(AJAX_URL.selectMatriculate,'');
    // laydateInit("#matriculate-input-admissiontime");
})

/**
 * @Desc 表格初始化
 * @Author 宣文彬
 * @param tableUrl 表格中获取数据的url地址
 * @Date 2018-10-09
 */
function tableInit(tableUrl,cond) {
    $('#my-table').bootstrapTable({
        url: tableUrl,
        method: requestJson ? 'get' : 'post',                      //请求方式（*）
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        // height:  $(window).height() - 180,
        toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: requestJson ? "client" : "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 10,                     //每页的记录行数（*）
        pageList: [10],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        //showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "volunteerkey",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        //得到查询的参数
        queryParams: function (params) {
            var temp;
            if (cond == "condition") {
                temp = {
                    rows: params.limit,                         //页面大小
                    projectName: $("#search-input-project").val(),
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:10,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            } else {
                temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:10,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            }
        },
        columns: [{
            field: 'checkbox',
            checkbox: true,
            visible: true               //是否显示复选框
        }, {
            field: 'userKey',
            title: '用户主键'
        }, {
            field: 'userAccount',
            title: '用户账户'
        }, {
            field: 'realname',
            title: '真实姓名'
        }, {
            field: 'mail',
            title: '邮箱',
        }, {
            field: 'phone',
            title: '手机号',
        }, {
            field: 'location',
            title: '所在地',
        }, {
            field: 'qqnumber',
            title: 'QQ号',
        },{
            field:'projectName',
            title:'项目名称',
        },{
            field: 'projectKey',
            title: '项目主键',

        }
        ],
        onLoadSuccess: function (e) {
            // console.log(e)
        },
        onLoadError: function () {
            console.log("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
        },
        //客户端分页，需要指定到rows
        responseHandler: function (result) {
            console.log(result)
            if (requestJson) {
                return result.rows;
            } else {
                return {
                    "rows": result.data.list,
                    "total": result.data.count
                };
            }
        }
    });
    $('#my-table').bootstrapTable('hideColumn', 'userKey');
    $('#my-table').bootstrapTable('hideColumn', 'projectKey');

}


/**
 * @Desc “查询”按钮
 * @Author 宣文彬
 * @Date 2018-10-11
 */
function selectMatriculate() {
    $('#my-table').bootstrapTable("destroy");
    tableInit(AJAX_URL.selectMatriculate,"condition");
}
/**
 * @Desc “重置”按钮
 * @Author 宣文彬
 * @Date 2018-10-11
 */
function ResetPlanInput() {
    $("#search-input-project").val('');
}
/**
 * @Desc “招募”按钮
 * @Author 刘志杰
 * @Date 2018-10-11
 */
function openModel() {
    let checkboxTable = $("#my-table").bootstrapTable('getSelections');
    if (checkboxTable.length > 1 || checkboxTable.length <= 0) {
        poptip.alert(POP_TIP.choiceOne);
        $('#my-table').bootstrapTable("refresh");
        return 0;

    }
    console.log(checkboxTable);
    console.log(checkboxTable[0].status)
    if (checkboxTable[0].status == 1) {
        poptip.alert(POP_TIP.recruitExist);
        $('#my-table').bootstrapTable("refresh");
        return 0;
    }
    $.ajax({
        url: AJAX_URL.insertMatriculate,
        type: requestJson ? 'get' : 'put',
        data: JSON.stringify({
            "userKey": checkboxTable[0].userKey,
            "status":1
        }),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            if (data.ok) {
                poptip.alert(POP_TIP.recruitSuccess);
                $('#my-table').bootstrapTable("refresh");
            } else {
                poptip.alert();
            }
            console.log(data)
        }
    })
}

/**
 * @Desc laydate 初始化
 * @Author 刘志杰
 * @param id 时间控件的id
 * @Date 2018-10-11
 */
// function laydateInit(id) {
//     laydate.render({
//         elem: id,
//         max: new Date().Format('yyyy-MM-dd'),
//         done: function (value) {
//
//         }
//     });
//
// }

/**
 * @Desc “录取”按钮
 * @Author 刘志杰
 * @Date 2018-10-12
 */
// function admssion() {
//     let checkboxTable = $("#my-table").bootstrapTable('getSelections');
//     if (checkboxTable.length <= 0) {
//         poptip.alert(POP_TIP.choiceOne);
//         return 0;
//     } else if (checkboxTable.length > 1) {
//         poptip.alert(POP_TIP.choiceOnlyOne);
//         return 0;
//     }
//     $("#modal-input-key").val(checkboxTable[0].volunteerkey);
//     $("#matriculate-modal").modal("show");
//
//
// }



