/**
 *@desc 专业管理初始化
 *@date 2018年10月11日10:06:08
 *@author zhangziteng
 */

var UPDATEDISCIPLINE = {};    //修改时 选择的用户信息
var ADDDISCIPLINE = {};       //创建时 填写的用户信息
var SELECT_DISCIPLINE_URL = requestJson ? AJAX_URL.recruitPlanData : requestUrl + "api/generate/projectinfo/queryByPage"; //url地址 分页查询
var DELETE_DISCIPLINE_URL = requestUrl + "api/generate/projectinfo/deleteProject"; //url地址 删除
var INSERT_DISCIPLINE_URL = requestUrl + "api/generate/projectinfo/addProject"; //url地址 新增
var UPDATE_DISCIPLINE_URL = requestUrl + "api/generate/projectinfo/updateProject"; //url地址 修改
var CHECK_DISCIPLINE_URL = requestUrl + "api/generate/projectinfo/queryByPage"; //url地址 模糊
var LOGIN_INFO = {
    //登录的用户信息
    "userLoginRole": 1
};
$(function () {
    tableInit(SELECT_DISCIPLINE_URL, '');
    // $("#basicinfo-input-realname").select2();
});

/**
 *@desc 专业信息表格初始化
 *@date 22018年10月11日10:06:11
 *@author zhangziteng
 */

function tableInit(tableUrl, cond) {
    $('#discipline-table-all').bootstrapTable({
        url: tableUrl,
        method: requestJson ? 'get' : 'post',                      //请求方式（*）
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        // paginationHAlign:'center',       //分页水平位置
        paginationDetailHAlign: "right",      //分页详细信息位置
        sortName: 'createTime',                //排序的数据字段名
        sortable: true,                     //是否启用排序
        sortOrder: "desc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [5, 10],                   //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        //showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        //得到查询的参数
        queryParams: function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp;
            if (cond == "condition") {
                temp = {
                    rows: params.limit,                         //页面大小
                    projectName: $("#discipline-input-search").val(),
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize: 5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            } else {
                temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize: 5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            }
        },
        columns: [{
            checkbox: true,
            visible: true                  //是否显示复选框
        }, {
            field: 'projectName',
            title: '项目名称',
            width: 200
        }, {
            field: 'projectType',
            title: '项目类型',
            width: 200
        }, {
            field: 'projectBudget',
            title: '项目预算（元）',
            width: 200
        }, {
            field: 'recruitQuestion',
            title: '招募要求',
            width: 300

        // }, {
        //     field: 'majorname',
        //     title: '相关文档',
        //     width: 100,
        //     align: 'center',
        //     valign: 'middle',
        //     formatter: function (value, row, index) {
        //         //通过formatter可以自定义列显示的内容
        //         //value：当前field的值，即id
        //         //row：当前行的数据
        //         let a = '<a style="color: #00b3ee;" onclick="openContinueModal()">下载</a>';
        //         return a;
        //     }
        }, {
            field: 'createTime',
            title: '创建时间',
            width: 200,
            formatter: function (value) {
                if (value != null) {
                    return getMyDate(value);
                }
                return "-";
            }
        }],
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
            // console.log(result)
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
}

/**
 *@desc 模糊查询按钮
 *@date 2018/10/12 09:48:18
 *@author zhangziteng
 */
function SearchPlan() {
    $('#discipline-table-all').bootstrapTable("destroy");
    tableInit(CHECK_DISCIPLINE_URL, "condition");
}

/**
 *@desc 重置按钮
 *@date 2018/10/12 09:49:50
 *@author zhangziteng
 */
function ResetPlanInput() {
    $('#discipline-input-search').val('');
}

/**
 *@desc 创建专业名称
 *@date 2018年10月11日10:06:17
 *@author zhangziteng
 */
function AddDisciplineModal() {
    $("#basicinfo-input-age").val('');
    $("#basicinfo-input-idcardnumber").val('');
    $("#add-input-introduction").val('');
    $("#add-input-recruit").val('');
    $("#basicinfo-input-realname").val('');
    $("#discipline-modal-title").html('<h3>创建项目</h3>');

}

/**
 *@desc 修改专业名称
 *@date 2018年10月11日10:06:20
 *@author zhangziteng
 */

function AlterDisciplineModal() {
    let checkboxTable = $("#discipline-table-all").bootstrapTable('getSelections');
    if (checkboxTable.length <= 0) {
        poptip.alert(POP_TIP.choiceOne)
        return 0;
    } else if (checkboxTable.length > 1) {
        poptip.alert(POP_TIP.choiceOnlyOne)
        return 0;
    }


    $("#discipline-modal-title").html('<h3>修改项目</h3>');
    $("#basicinfo-input-realname").val(checkboxTable[0].projectType);
    $("#basicinfo-input-age").val(checkboxTable[0].projectName);
    $("#basicinfo-input-idcardnumber").val(checkboxTable[0].projectBudget);
    $("#add-input-introduction").val(checkboxTable[0].briefintroduction);
    $("#add-input-recruit").val(checkboxTable[0].recruitQuestion);

    $("#add-discipline-modal").modal("show");
}

/**
 *@desc 专业管理保存，修改
 *@date 2018/10/12 16:34:48
 *@author zhangziteng
 */
function AddDiscipline() {
    if ($("#discipline-modal-title").html() == "<h3>创建项目</h3>") {
        //创建
        ADDDISCIPLINE = {
            projectType: $("#basicinfo-input-realname").val(),
            projectName: $("#basicinfo-input-age").val(),
            projectBudget: $("#basicinfo-input-idcardnumber").val(),
            briefintroduction: $("#add-input-introduction").val(),
            recruitQuestion: $("#add-input-recruit").val(),

        };

        $.ajax({
            url: INSERT_DISCIPLINE_URL,
            type: requestJson ? 'get' : 'post',
            data: JSON.stringify(ADDDISCIPLINE),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                if (data.ok) {
                    poptip.alert(POP_TIP.addSuccess);
                    $("#add-discipline-modal").modal("hide");
                    $('#discipline-table-all').bootstrapTable("refresh");
                } else {
                    poptip.alert(POP_TIP.addFail);
                }
            }
        })
    }
    if ($("#discipline-modal-title").text() == "修改项目") {
        // 修改
        let checkboxTable = $("#discipline-table-all").bootstrapTable('getSelections');
        UPDATEDISCIPLINE = {
            projectKey: checkboxTable[0].projectKey,
            projectType: $("#basicinfo-input-realname").val(),
            projectName: $("#basicinfo-input-age").val(),
            projectBudget: $("#basicinfo-input-idcardnumber").val(),
            briefintroduction: $("#add-input-introduction").val(),
            recruitQuestion: $("#add-input-recruit").val()
        };
        $.ajax({
            url: UPDATE_DISCIPLINE_URL,
            type: requestJson ? 'get' : 'post',
            data: JSON.stringify(UPDATEDISCIPLINE),
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                if (data.message == "专业名称已存在") {
                    poptip.alert("专业名称已存在");
                } else {
                    if (data.ok) {
                        poptip.alert(POP_TIP.updateSuccess);
                        $("#add-discipline-modal").modal("hide");
                        $('#discipline-table-all').bootstrapTable("refresh");
                    } else {
                        poptip.alert(POP_TIP.updateFail);
                    }

                }
            }
        })
    }
}

/**
 *@desc 删除按钮
 *@date 2018年10月11日10:06:24
 *@author zhangziteng
 */

function DeleteDiscipline() {
    let checkboxTable = $("#discipline-table-all").bootstrapTable('getSelections');
    if (checkboxTable.length <= 0) {
        poptip.alert(POP_TIP.choiceOne)
        return 0;
    } else if (checkboxTable.length > 1) {
        poptip.alert(POP_TIP.choiceOnlyOne)
        return 0;
    }

    delete checkboxTable[0].checkbox;
    console.log(checkboxTable[0].majorkey);
    let dataObj = {
        // "userLoginRole": LOGIN_INFO.userLoginRole,
        projectKey: checkboxTable[0].projectKey
        // "userLoginRole": LOGIN_INFO.userLoginRole
    };

    console.log(dataObj)
    poptip.confirm({
        content: POP_TIP.confirm,
        yes: function () {
            console.log('confirm-yes');
            //删除操作
            $.ajax({
                url: DELETE_DISCIPLINE_URL,
                type: requestJson ? 'get' : 'post',
                data: JSON.stringify({
                    projectKey: checkboxTable[0].projectKey
                }),
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    if (data.ok) {
                        poptip.alert(POP_TIP.deleteSuccess);
                        console.log(data);
                        $('#discipline-table-all').bootstrapTable("refresh");
                    } else {
                        poptip.alert(POP_TIP.deleteFail);
                    }
                }
            });
            poptip.close();
        },
        cancel: function () {
            poptip.close();
        }
    });
}