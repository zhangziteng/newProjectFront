/*
 * @Description:首页内容
 * @Date 2018/9/28 10:10
 * @author Wang ke long
*/

/*
 * @Description:获取待办事项数据
 * @Date 2018/9/28 10:10
 * @author Wang ke long
*/
// $(function(){
//     $.ajax({
//         url: AJAX_URL.IndexEvent,
//         type: requestJson?'get':"post",
//         dataType: "json",
//         success: function(data) {
//             ////获得问题列表的内容
//             if (data && data.ok === true) {
//                     console.log(data)
//                     $.each(data, function (index, item) {
//                         //循环获取数据
//                         let myData = data[index]
//                         console.log(myData)
//                         if(myData instanceof Array){
//                             $.each(myData,function (inde,ite) {
//                                 let $str =
//                                     '<li class="event-li"><span class="event-li-span glyphicon glyphicon-question-sign"></span><a class="event-a">' + myData[inde].evn + '</a><a class="event-badge badge">' + myData[inde].num + '</a></li><hr>'
//                                 $("#event-wait-list").append($str)
//                             })
//                         }
//                     });
//             }else {
//                 poptip.alert("请求失败");
//                 console.log("请求失败")
//             }
//             /*if(data){
//                 console.log(data)
//                 $.each(data, function (index, item) {
//                     //循环获取数据
//                     let myData = data[index]
//                     console.log(myData)
//                     $.each(myData,function (inde,ite) {
//                         let $str =
//                         '<li class="event-li"><span class="event-li-span glyphicon glyphicon-question-sign"></span><a class="event-a">' + myData[inde].evn + '</a><a class="event-badge badge">' + myData[inde].num + '</a></li><hr>'
//                         $("#event-wait-list").append($str)
//                     })
//                 });
//             }*/
//         }
//     })
// })
/*
 * @Description:获得数据发布数据
 * @Date 2018/9/28 11:26
 * @author Wang ke long
*/
//获得表格数据
// $(function(){
//     $.ajax({
//         url: AJAX_URL.IndexData,
//         type: requestJson?'get':"post",
//         dataType: "json",
//         success: function(data) {
//             ////获得数据发布列表的内容
//             if(data &&data.ok === true){
//                 console.log(data)
//                 $.each(data, function (index, item) {
//                     //循环获取数据
//                     let myData = data[index]
//                     console.log(myData)
//                     if(myData instanceof Array){
//                     $.each(myData,function (ind,ite) {
//                         let $str = '<table class="data-table-publish table">' +
//                             '<tr class="data-tr-publish">' +
//                             '<td>'+'<a class="data-a-publish">'+myData[ind].carInfo+'</a>'+'</td>' +
//                             '<td>'+'<a class="data-a-publish">'+myData[ind].depart+'</a>'+'</td>' +
//                             '<td>'+'<a class="data-a-publish">'+myData[ind].name+'</a>'+'</td>' +
//                             '<td>'+'<a class="data-a-publish">'+myData[ind].date+'</a>'+'</td>' +
//                             '</tr>' +
//                             '</table>'
//                         $("#data-table").append($str)
//                     })
//                     }
//                 });
//             }else {
//                 poptip.alert("请求失败");
//             }
//
//         }
//     })
// })
/*
 * @Description:获取备件查询数据
 * @Date 2018/9/28 12:43
 * @author Wang ke long
*/
// $(function(){
//     $.ajax({
//         url: AJAX_URL.IndexSpare,
//         type: requestJson?'get':"post",
//         dataType: "json",
//         success: function(data) {
//             //获得备件查询列表的内容
//             if(data && data.ok === true){
//                 console.log(data)
//                 $.each(data, function (index, item) {
//                     //循环获取数据
//                     let myData = data[index]
//                     console.log(myData)
//                     if(myData instanceof Array){
//                     $.each(myData,function (inde,ite) {//遍历图片和名称
//                         let $str = '<li  class="spare-li"><img class="spare-images" src= '+myData[inde].picture+' ><span class="spare-span">' + myData[inde].name + '</span></li>'
//                         $("#spare-content").append($str)
//                     })
//                     }
//                 });
//             }else {
//                 poptip.alert("请求失败");
//             }
//         }
//     })
// })

/*
 * @Description:首页标签页动态效果
 * @Date 2018/9/28 10:14
 * @author Wang ke long
*/
// $(document).ready(function() {
//     var $wrapper = $('.tab-wrapper'),
//         $allTabs = $wrapper.find('.tab-content > div'),
//         $tabMenu = $wrapper.find('.tab-menu li'),
//         $line = $('<div class="line"></div>').appendTo($tabMenu);
//     $allTabs.not(':first-of-type').hide();
//     $tabMenu.filter(':first-of-type').find(':first').width('100%')
//     $tabMenu.each(function(i) {
//         $(this).attr('data-tab', 'tab'+i);
//     });
//     $allTabs.each(function(i) {
//         $(this).attr('data-tab', 'tab'+i);
//     });
//     $tabMenu.on('click', function() {
//         var dataTab = $(this).data('tab'),
//             $getWrapper = $(this).closest($wrapper);
//         $getWrapper.find($tabMenu).removeClass('active');
//         $(this).addClass('active');
//         $getWrapper.find('.line').width(0);
//         $(this).find($line).animate({'width':'100%'}, 'fast');
//         $getWrapper.find($allTabs).hide();
//         $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
//     });
// });//end ready


/**
 *@desc 页面初始化
 *@date 2018/11/15 14:06:41
 *@author zhangziteng
 */
var SELECT_ADMINPLAN_URL = requestUrl + "api/generate/demandvolunteerinformation/selectDemandvolunteerinformation"; //url地址 分页查询
var PUBLICH_NUMBER =  requestUrl + "api/generate/demandvolunteerinformation/selectPublishCount";//查询发布数量
var COMPANY_NUMBER = requestUrl + "api/generate/companyinfo/queryByPage";//查询发布数量
var PEOPLE_NUMBER = requestUrl + "api/generate/recruitpeople/selectRecruitpeople";//查询发布数量
var a;
$(function () {
    // tableInit(SELECT_ADMINPLAN_URL,"all");
    tableTwoInit(SELECT_ADMINPLAN_URL,"all");
    tableThreeInit(AJAX_URL.selectMatriculate,'');
    AJAX1();
    AJAX2();
    AJAX3();
    AJAX4();
    // getSchAndMaj();
});

/**
 *@desc 初始化表格
 *@date 2018/11/15 14:04:25
 *@author zhangziteng
 */

function tableInit(tableUrl,cond) {
    $('#plan-table-all').bootstrapTable({
        url: tableUrl,
        method: requestJson ? 'get' : 'post',    //请求方式（*）
        dataType: "json",
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        // paginationHAlign:'center',       //分页水平位置
        //paginationDetailHAlign:"right",      //分页详细信息位置
        paginationDetailHAlign:"right",      //分页详细信息位置
        sortName:'createtime',                //排序的数据字段名
        sortable: false,                     //是否启用排序
        sortOrder: "desc",                   //排序方式
        sidePagination: requestJson ? "client" : "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [5,10],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        //showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 300,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "demandKey",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        contentType: 'application/json;charset=utf-8',
        //得到查询的参数
        /**
         *@desc 招生计划表格初始化
         *@date 2018/10/12 16:46:27
         *@author yueben
         */
        queryParams : function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp
            if (cond == "condition") {
                temp = {
                    rows: params.limit,                         //页面大小
                    companyName: $("#select-input-companyName").val(),
                    projectName: $("#select-input-projectName").val(),
                    projectType: $("#select-input-projectType").val(),
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            } else {
                temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            }
        },
        columns: [{
            title: '序号',
            width:100,
            formatter: function (valve,row,index) {
                return index + 1;
            }
        }, {
            field: 'companyName',
            title: '企业名称',
            width:200
        }, {
            field: 'projectName',
            title: '项目名称',
            width:200
        },{
            field: 'projectType',
            title: '项目类型',
            width:200
        }, {
            field: 'recruitQuestion',
            title: '招募要求',
            width:200
        }
        ],
        onLoadSuccess: function (e) {
            console.log(e)
        },
        onLoadError: function () {
            console.log("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
        },
        //客户端分页，需要指定到rows
        responseHandler: function(data) {
            console.log(data);
            return {
                "rows": data.data.list,
                "total": data.data.count
            };
            return data.rows;
        }
    });
}

function tableTwoInit(tableUrl,cond) {
    $('#adminssions-table').bootstrapTable({
        url: tableUrl,
        method: 'post',                      //请求方式（*）
        dataType: "json",
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        paginationDetailHAlign:"right",      //分页详细信息位置
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [5,10,15],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        //showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 300,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        contentType: 'application/json;charset=utf-8',
        //得到查询的参数
        queryParams: function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp

            if (cond == "condition") {
                temp = {
                    // "pageSize": params.limit,                         //页面大小
                    // "page": (params.offset / params.limit) + 1,   //页码
                    // pageSize:5,
                    rows: params.limit,                         //页面大小
                    companyName: $("#select-input-schName").val(),
                    projectName: $("#select-input-majName").val(),
                    projectType: $("#select-projectType").val(),
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            } else if (cond == "all") {

                temp = {
                    // "pageSize": params.limit,                         //页面大小
                    // "page": (params.offset / params.limit) + 1,
                    // "projectName":$("#select-input-schName").val(),
                    // pageSize:5,
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                }
            }
            return JSON.stringify(temp);
        },
        columns: [{
            field: 'projectName',
            title: '项目名称',
            width:200
        },{
            field: 'projectType',
            title: '项目类型',
            width:150
        },{
            field: 'publishTime',
            title: '发布时间',
            width:200,
            formatter: function (v,r,i) {
                if (v == 0) {
                    return "未发布！";
                } else {
                    if (v == null || v == '') {
                        return "-";
                    }
                    let now = new Date(v);
                    return getMyTime(now);
                }
            }

        }, {
            field: 'offlineTime',
            title: '下线时间',
            width:200,
            formatter: function (v,r,i) {
                if (v ==  null || v == '') {
                    return "未发布";
                } else {
                    let now = new Date(v);
                    return getMyTime(now);
                }
            }
        }],
        onLoadSuccess: function (e) {
            console.log(e)
        },
        onLoadError: function () {
            console.log("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
        },
        //客户端分页，需要指定到rows
        responseHandler: function (data) {
            console.log(data);
            return {
                "rows": data.data.list,
                "total": data.data.count
            }
        }
    });
}

/**
 * @Description:   _时间格式规范
 * @Author:         yueben
 * @CreateDate:     2018/10/24 10:52
 */
function getMyTime(now) {
    let yy = now.getFullYear();
    let mon = (now.getMonth() + 1) < 10 ? "-0" + (now.getMonth() + 1) : "-" + (now.getMonth() + 1);
    let dd = now.getDate() < 10 ? "-0" + now.getDate() : "-" + now.getDate();

    return yy + mon + dd;
}

function tableThreeInit(tableUrl,cond) {
    $('#my-table-zhaomu').bootstrapTable({
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
        paginationDetailHAlign:"right",      //分页详细信息位置
        sortOrder: "asc",                   //排序方式
        sidePagination: requestJson ? "client" : "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [5,10],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索
        strictSearch: true,
        //showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: false,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 300,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
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
                    realname: $("#zhaomu-input-input").val(),
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            } else {
                temp = {
                    rows: params.limit,                         //页面大小
                    page: (params.offset / params.limit) + 1,   //页码
                    pageSize:5,
                    sort: params.sort,      //排序列名
                    sortOrder: params.order //排位命令（desc，asc）
                };
                return JSON.stringify(temp);
            }
        },
        columns: [{
            field: 'userAccount',
            title: '用户账户'
        }, {
            field: 'realname',
            title: '真实姓名'
        },{
            field: 'location',
            title: '所在地',
        }, {
            field:'projectName',
            title:'项目名称',
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
    $('#my-table-zhaomu').bootstrapTable("destroy");
    tableThreeInit(AJAX_URL.selectMatriculate,"condition");
}


var chart = Highcharts.chart('container', {

    chart: {
        type: 'column',
    },
    credits: {//去掉 highcharts.com
        enabled:false
    },
    title: {
        text: '综合数据统计表'
    },
    subtitle: {
        text: '数据来源: 码农库'
    },
    xAxis: {
        categories: ['需求创建', '发布', '招募', '企业'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '总数量 (单)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' 十'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                allowOverlap: true // 允许数据标签重叠
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: '数量',
        data: []
    }]
});
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];


function AJAX1() {
    $.ajax({
        type: 'post',
        url: SELECT_ADMINPLAN_URL,
        data: JSON.stringify({}),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            console.log("start")
            console.log(data.data.count)
            data1.push(["需求创建", data.data.count])

            chart.series[0].setData(data1);
        }

    });
}

function AJAX2() {
    $.ajax({
        type: 'post',
        url: PUBLICH_NUMBER,
        data: JSON.stringify({}),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            console.log("--------------")
            console.log(data.data)
            data1.push(["发布", data.data])

            chart.series[0].setData(data1);
        }

    });
}

function AJAX3() {
    $.ajax({
        type: 'post',
        url: PEOPLE_NUMBER,
        data: JSON.stringify({}),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            console.log("_+_++_+_+_+_+_+_+_+_+_=")
            console.log(data)
            data1.push(["招募", data.data.count])

            chart.series[0].setData(data1);
        }

    });
}

function AJAX4() {
    $.ajax({
        type: 'post',
        url: COMPANY_NUMBER,
        data: JSON.stringify({}),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            console.log("++++++++++++++++++++")
            console.log(data)
            data1.push(["企业", data.data.count])
            chart.series[0].setData(data1);
        }

    });
}