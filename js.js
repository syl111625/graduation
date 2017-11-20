//前半部分
var url= "http://192.168.3.14:8080/";
var wsUrl="ws://192.168.3.14:8080/webSocketServer/";
//register和login建立本地存储,给后面获取用户名、警报等数据
//index中建立websocket
//	websocket前台页面方法
			var websocket = null;

			//  判断当前浏览器是否支持WebSocket
			if('WebSocket' in window) {
				//    	申请一个WebSocket对象，参数是需要连接的服务器端的地址 
				websocket = new WebSocket(wsUrl + id);

			} else {
				alert('Not support websocket');
			}

			//  如果连接失败，发送、接收数据失败或者处理数据出现错误，浏览器会触发onerror消息;
			websocket.onerror = function() {
				console.log("back/index.js, websocket握手失败");
			};

			websocket.onopen = function(event) {};

			
			
			if(websocket.readyState == 1) {
				websocket.send('hello world');
			}

			//  传递消息的渠道
			websocket.onmessage = function(event) {
				//      setMessageInnerHTML(event.data);
				console.log(event.data);
			};

			

			//  连接关闭的回调方法
			websocket.onclose = function() {};

			//  当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
			window.onbeforeunload = function() {
				websocket.close();
			};

//图表数据的获取和更新

//建立下拉框列表
			var weeklist = "";
			for(var i = 1; i < 12; i++) {
				weeklist += "<option >第" + i + "周</option>"
			}
			var addWeek = $('.addWeek').html(weeklist);

//近周图表更新数据，注把数据放到数组中才会显示，注意setoption的格式问题，注意折线图和饼图数据更新的格式不一样
			$(".checkWeek").click(function() {
				
				//选中的电表值，日期值，周期值			
				var devWeek = $('.devWeek option:selected').val();
				var week = $(".week").val();
				//var timeWeek=$(".timeWeek").val();
				//var optionWeek=$('.optionWeek option:selected') .val();
				console.log(devWeek + "  " + week);
				//	jQuery.support.cors = true;
				echartsLineWeek.showLoading();
				echartsPieWeek.showLoading();
				$.ajax({
					url: url + "data/oneDeviceData",
					type: 'post',
					data: {
						deviceId: devWeek,
						condition: week
					},
					dataType: "json",
					xhrFields: {
						withCredentials: true
					},
					crossDomain: true,
					success: function(data) {
						console.log(data);

						echartsLineWeek.hideLoading();
						echartsPieWeek.hideLoading();
						//把数据放到数组中
						var array1 = new Array(data.length);
						var array2 = new Array(data.length);
						var array3 = new Array(data.length);
						for(var i = 0; i < data.length; i++) {

							array1[i] = data[i].variable1;
							array2[i] = data[i].variable2;
							array3[i] = data[i].variable3;
						}
						//近周柱状图图表更新数据
						echartsLineWeek.setOption({
							xAxis: {
								data: array3
							},
							series: [{
									name: '用电量',
									type: 'bar',
									data: array1
								},
								{
									name: '功率',
									type: 'bar',
									data: array2
								},
							]

						});

						//近周饼图图表更新数据
						echartsPieWeek.setOption({
							legend: {
								data: array3
							},
							series: [{
								name: '用电量',
								type: 'pie',
								data: [{
										value: array1[0],
										name: array3[0]
									},
									{
										value: array1[1],
										name: array3[1]
									},
									{
										value: array1[2],
										name: array3[2]
									},
									{
										value: array1[3],
										name: array3[3]
									},
									{
										value: array1[4],
										name: array3[4]
									},
									{
										value: array1[5],
										name: array3[5]
									},
									{
										value: array1[6],
										name: array3[6]
									}
								]
							}]

						});

					},
					error: function() {
						echartsLineWeek.hideLoading();
						console.log('error');
					}
				});
			});

//中间部分
//报警策略、消息通知、维修任务




//后半部分设备、用户列表
//获取设备列表，拼接表格数据，注意表格拼接过程中的行获取index(this)
			//jQuery.support.cors = true;
			$.ajax({
				url: url + "device/listDevice",
				type: 'get',
				
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
				success: function(data) {
					console.log(data);
					var str = "";
					var type;
					var state;
					for(i in data) {
						//转换设备类型和状态
						if(data[i].type == 0) {
							type = "电表";
						} else if(data[i].type == 1) {
							type = "网关";
						}
						if(data[i].isNormal == 0) {
							state = "异常";
						} else if(data[i].isNormal == 1) {
							state = "正常";
						}
						str += "<tr>" +
							"<td>" + data[i].id + "</td>" +
							"<td>" + data[i].name + "</td>" +
							"<td>" + type + "</td>" +
							"<td>" + data[i].address + "</td>" +
							"<td>" + data[i].startUseTime + "</td>" +
							"<td>" + state + "</td>" +
							"<td><a data-toggle='modal' class='btn btn-info modifyModal' href='#modal-form'>修改</a>&nbsp;<button class='btn btn-danger deviceDelete'>删除</button></td>" +
							"</tr>";

					}
					$("#equipList").html(str);

//信息弹出到模态框
					$(".modifyModal").click(function() {

						//var i=$(this).parent().parent().attr("id");
						var i = $(".modifyModal").index(this);
						//var i=parseInt(index)-1;
						console.log(i);

						if(data[i].type == 0) {
							type = "电表";
						} else if(data[i].type == 1) {
							type = "网关";
						}
						if(data[i].isNormal == 0) {
							state = "异常";
						} else if(data[i].isNormal == 1) {
							state = "正常";
						}
						
						$("#id").val(data[i].id);
						$("#name").val(data[i].name);
						$("#type").val(data[i].type);
						$("#address").val(data[i].address);
						$("#startUseTime").val(data[i].startUseTime);
						$("#isNormal").val(data[i].isNormal);
					});


//修改设备     
//删除设备



//保存当前用户信息
						var storage = window.localStorage;
						//获取管理员信息			
						var editName = storage.getItem("userName");
						if(editName == data[i].name){
							storage.setItem("id",data[i].id);
							storage.setItem("name",data[i].name);
							storage.setItem("email",data[i].email);
							storage.setItem("password",data[i].password);
							storage.setItem("isUse",data[i].isUse);
							storage.setItem("role",data[i].role);			
							storage.setItem("createTime",data[i].createTime);
							storage.setItem("updateTime",data[i].updateTime);
							
						}
						
//从本地存储中获取当前用户信息
			var storage = window.localStorage;	
			var id = storage.getItem("id");
			var name = storage.getItem("name");
			var email = storage.getItem("email");
			var password = storage.getItem("password");
			
			var role = storage.getItem("role");	
			var isUse = storage.getItem("isUse");
			var createTime = storage.getItem("createTime");
			var updateTime = storage.getItem("updateTime");
			
						//转换用户类型和使用状态
						if(role == "admin") {
							userole = "管理员";
						} else if(role == "maintenance man") {
							userole = "维修员";
						}
						if(isUse == 0) {
							useState = "停用";
						} else if(isUse == 1) {
							useState = "启用";
						}
			 			
			$("#id").val(id);
			$("#name").val(name);
			$("#email").val(email);
			$("#password").val(password);
			$("#role").val(role);
			$("#isUse").val(isUse);
			$("#createTime").val(createTime);
			$("#updateTime").val(updateTime);





<!--<script type="text/javascript">
			//日期范围限制
			var start = {
				elem: '#start',
				format: 'YYYY/MM/DD hh:mm:ss',
				min: laydate.now(), //设定最小日期为当前日期
				max: '2099-06-16 23:59:59', //最大日期
				istime: true,
				istoday: false,
				choose: function(datas) {
					end.min = datas; //开始日选好后，重置结束日的最小日期
					end.start = datas; //将结束日的初始值设定为开始日
				}
			};
			var end = {
				elem: '#end',
				format: 'YYYY/MM/DD hh:mm:ss',
				min: laydate.now(),
				max: '2099-06-16 23:59:59',
				istime: true,
				istoday: false,
				choose: function(datas) {
					start.max = datas; //结束日选好后，重置开始日的最大日期
				}
			};
			laydate(start);
			laydate(end);
		</script>-->

xhr 出现访问取消的情况解决
1.aysnc:false;                 
2.event.preventDefault();	form中action和type="sumbit"的事件与click事件冲突
3.return false;				时间超时影响
4.type="button" 每个button都要定义,避免出现cancled状态