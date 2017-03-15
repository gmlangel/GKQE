/**
 * Created by guominglong on 2017/3/13.
 */
function GKQEManager(){
    //获取GKQE配置信息的url
    var getGKQEInfoURL = 'http://www.51talk.com/Ac/AcConf/getGKAndQE';
    //接口请求的超时时间
    var tout = 30000;
    //要请求的接口数据的数据类型
    var requetDataType = 'json';
    //用于数据请求的请求类型
    var requestMethod = 'post';
    /**
     * 默认配置
     * */
    var defaultConfig = {
        /*是否可以发送光标同步数据*/
        "canSendMousePos":"0",
        /*是否可以接收光标同步数据*/
        "canReceiveMousePos":"1",
        /*是否可以绘制白板数据，是否显示白板工具条*/
        "canDrawWhiteBorad":"1",
        /*是否需要显示页码同步按钮*/
        "canNeedSyncPagebtn":"1",
        /*是否可以向远端发送跳转pdf教材命令*/
        "canSendChangePageNum":"0",
        /*是否可以清空远端的白板数据*/
        "canSendClearWhiteDataToRemote":"1",
        /*是否可以回退远端的白板数据*/
        "canSendUndoWhiteDataToRemote":"1",
        /*是否可以举手，申请上麦*/
        "canHandler":"1",
        /*是否可以发送文本聊天消息*/
        "canSendMsg":"1",
        /*是否可以在教室内发送文本聊天消息（用于全体禁言和全体解禁）*/
        "canSendMsgInClassRoom":"0",
        /*是否可以发送音频上行数据*/
        "canAudioUpload":"1",
        /*是否可以发送视频上行数据*/
        "canVideoUpload":"1",
        /*是否可以订阅视频下行数据*/
        "canVideoDownload":"1",
        /*是否要显示老师提示语工具条*/
        "canShowTeacherTipsTool":"0",
        /*是否可以设置其他用户上下麦*/
        "canSetOtherHand":"0",
        /*是否可以录音*/
        "canRecode":"1",
        /*可以设置其他人教室内的一些权限*/
        "canSetCommon":"0",
        /*是否可以踢人出教室*/
        "canKickUser":"0",
        /*是否允许发送互动问题*/
        "canSendQuestionHudong":"0",
        /*是否允许回答互动问题*/
        "canSendAnswerHudong":"0",
        /*白板工具的笔触颜色RGBA  0x0078ffff*/
        "whiteSrokeColor":"7929855",
        /*聊天消息右键菜单的样式 0为不显示右键菜单  2为显示老师应该显示的菜单*/
        "chatItemMenuType":"0",
        /*是否显示level等级标签*/
        "canShowLevelTag":"1",
        /*是否允许切换视频窗口*/
        "canSwapVideoWindow":"1",
        /*是否允许关闭自己的摄像头*/
        "canCloseOrOpenMyCamera":"1",
        /*是否显示并渲染本地视频窗口*/
        "canShowlocalView":"1",
        /*是否可以控制麦克风  静音和恢复*/
        "canControlMic":"1",
        /*是否显示"只看老师复选框"rr*/
        "canShowOnlytea":"1",
        /*"想对对方说"控件的显示样式,0为不显示 2为显示"想对老师说"  1为显示"想对学生说"*/
        "toSayStyle":"0",
        /*是否允许用户手动翻页*/
        "canToPage":"1",
        /*是否需要对教材尺寸进行特殊处理*/
        "needPDFSpecialTreatment":"0",
        /*是否可以显示"课后评价面板"*/
        "canShowEvaluePanel":"1",
        /*是否需要统计svc单次连接时长*/
        "needCountSVCLinkTime":"1",
        /*是否显示白板工具条的"tips"*/
        "canShowWhiteboardTips":"1",
        /*用户类型分组,同一个人可以属于多个分组,但分组不能冲突,比如"0,4"是可以的,但是"0,1"是不可以的 0为学生(无论是stu还是stu_pso都是学生)  1为老师  2为销售  3为flashTeacher  4为教室内部的管理员*/
        "group":"0",
        /*星星工具条的显示状态 0为不显示  1为显示学生样式 2为显示老师样式*/
        "starToolBarStyle":"0"
    };


    /**
     * 服务器端配置
     * */
    var serverConfig = {};


    /**
     * 自身的引用
     * */
    var selfInstance = this;

    /**
     * 事件派发者
     * */
    var dispatcherObj = null;

    /**
     * 自定义的事件提示信息
     * */
    this.info = "";

    /**
     * 初始化
     * */
    this.ginit = function(){
        dispatcherObj = document.createElement('div');
        //填充默认设置
        this.resetScByDc();
    }

    this.dispatchEvent = function(e){
        dispatcherObj.dispatchEvent(e);
    }

    this.addEventListener = function(ename,func){
        dispatcherObj.addEventListener(ename,func);
    }

    this.removeEventListener = function(ename,func){
        dispatcherObj.removeEventListener(ename,func);
    }

    /**
     * 清空serverConfig中的所有字段,再用默认配置(defaultConfig)重新覆盖服务器端配置(serverConfig)
     * */
    this.resetScByDc = function(){
        //清空serverConfig
        var keys = [];
        for(sk in serverConfig){
            keys.push(sk);
        }
        for(var i=0;i<keys.length;i++){
            serverConfig[keys[i]] = null;
            delete serverConfig[keys[i]];
        }
        serverConfig = {};
        //重新填充serverConfig
        for(dk in defaultConfig){
            serverConfig[dk] = defaultConfig[dk];
        }
    }

    /**
     * 请求GKQE相关配置信息
     * @param argObj是请求参数的obj封装,示例如下
     * defaultdata={
     * 'relId':'4233',
     * 'user_occup':'1',
     * 'tea_group':'9',
     * 'type':'tea',
     * 'buildver':'1.3.0.2',
     * 'lang':'Cn',
     * 'from':'Mac',
     * 'os':'Mac',
     * 'region':'Default',
     * 'ssoToken':'e1d5979e20ce1c13a2318ac892aa076b',
     * 'token':'4233_e7a54cb0dd746b8819f266456ac6d7a7',
     * 'is_buy':'1',
     * 'strategy':'ClassRoom_Base_1v1'
     * }
     * */
    this.requestGKQE = function(argObj){
        $.ajax({
            url:getGKQEInfoURL,
            timeout:tout,//默认请求超时时间30秒
            dataType:requetDataType,
            type:requestMethod,
            data:argObj,
            success:function(data,b){
                //ons.notification.alert(JSON.stringify(data));
                selfInstance.jiexiGKQE(data);
            },
            error:function(err){
                //alert(err.responseText);
                info = "请求GKQE接口时出错,错误:" + err.responseText;
                selfInstance.dispatchEvent(new Event(GKQEManager.RequestErr));
            }
        })
    }

    /**
     * 解析服务器返回的GKQE数据,并填充至serverConfig
     * @param gkqeResponse 服务器返回的objdata
     * */
    this.jiexiGKQE = function(gkqeResponse){
        var code = "";
        if(gkqeResponse.hasOwnProperty('code') && gkqeResponse['code'] != null){
            code = gkqeResponse['code'].toString();
        }
        var resObj = gkqeResponse['res'] || {};
        if(code == "1"){
            //请求成功
            var serDataStr = resObj['data'] || "";
            var b = true;
            try{
                var serData = JSON.parse(serDataStr);
            }catch(err){
                info = 'GKQE的json数据转换失败,原因:' + err;
                this.dispatchEvent(new Event(GKQEManager.CovertErr));
                b = false;
            }
            if(b == false){
                return;
            }
            for(key in serData){
                serverConfig[key] = serData[key];
            }
            alert(JSON.stringify(serverConfig));
            info = 'GKQE配置加载完毕'
            this.dispatchEvent(new Event(GKQEManager.Complete));
        }else{
            //由于某些原因未能查到指定条件对应的GKQE
            var errinfo = resObj['remindMsg'] || "";
            info = 'GKQE配置加载出现问题,原因是服务器端返回了错误:' + errinfo;
            this.dispatchEvent(new Event(GKQEManager.ServerErr));
        }
    }

    /**
     * 获取GKQE的某个配置值
     * */
    this.getConfig = function(key){
        var val = serverConfig[key] || "0";
        return val;
    }

    /**
     * 临时设置GKQE的某个配置值
     * */
    this.setConfig = function(key,value){
        if(key != null && key != "" && value != null){
            serverConfig[key] = value;
        }
    }
}
GKQEManager.CovertErr = 'corvertErr'
GKQEManager.ServerErr = 'serverGKQEErr';
GKQEManager.Complete = 'requestGKQEComplete';
GKQEManager.RequestErr = 'requestGKQEErr';

GKQEManager.instance = new GKQEManager();
GKQEManager.instance.ginit();