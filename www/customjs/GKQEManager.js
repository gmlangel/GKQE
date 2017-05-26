/**
 * Created by guominglong on 2017/3/13.
 */
function GKQEManager(){

    /**
    本次网络请求的参数
    */
    this.reqData = {};
    /**
     * 策略名
     * */
    this.strategy = "";
    /**
     * 当前的GKQE请求ID
     * */
    var currentGKQEID = 0;
    ///**
    // * 默认配置
    // * */
    //this.defaultConfig = {};
    //
    ///**
    // * 默认智能感知配置
    // * */
    //this.defaultZNGZConfig = {
    //    /*开关,0-关闭，1-打开*/
    //    "enable":"1",
    //    /*上报前需取本地设备次数*/
    //    "getdervicecount":"6",
    //    /*每次取本地设备状态间隔时间*/
    //    "getdervicetime":"5",
    //    /*扬声器低于警告值提示警告*/
    //    "speakerwarning":"30",
    //    /*麦克风于警告值提示警告*/
    //    "micphonewarning":"30",
    //    /*cpu状态占用变差阈值*/
    //    "cpuwarningvalue":"80",
    //    /*cpu变差报警次数阈值*/
    //    "cpuwarningtimes":"3",
    //    /*内存变差占用阈值*/
    //    "memorywarningvalue":"80",
    //    /*内存变差报警次数阈值*/
    //    "memorywarningtimes":"3",
    //    /*本地上行丢包报警阈值，超过阈值报警，单位百分比*/
    //    "uploadpacketlosswarningrate":"30",
    //    /*本地上行丢包超过阈值报警，变差次数，超过次数认为麦克风连接异常*/
    //    "uploadpacketlosswarningtimes":"4",
    //    /*本地上行丢包连接中断阈值，超过阈值认为连接中断*/
    //    "uploadpacketnoconnectvalue":"80",
    //    /*本地上行丢包连接最近出现连续次数,默认只有最近两次出现上行丢包超过中断阈值认为是连接中断*/
    //    "uploadpacketnoconnecttimes":"2",
    //    /*本地下行丢包报警阈值，超过阈值报警，单位百分比*/
    //    "downloadpacketlosswarningrate":"30",
    //    /*本地下行丢包超过阈值报警，变差次数，超过次数认为扬声器连接异常*/
    //    "downloadpacketlosswarningtimes":"4",
    //    /*本地下行丢包连接中断阈值，超过阈值认为连接中断*/
    //    "downloadpacketnoconnectvalue":"80",
    //    /*本地下行丢包连接最近出现连续次数,默认只有最近两次出现下行丢包超过中断阈值认为是连接中断*/
    //    "downloadpacketnoconnecttimes":"2",
    //    /*p2s延迟阈值,单位ms*/
    //    "p2sdelay":"800",
    //    /*p2s变差次数判断*/
    //    "p2sdelaywarningtimes":"3"
    //}
    //
    //
    ///**
    // * 学生默认配置
    // * */
    //var stuDefaultConfig = {
    //    /*是否可以发送光标同步数据*/
    //    "canSendMousePos":"0",
    //    /*是否可以接收光标同步数据*/
    //    "canReceiveMousePos":"1",
    //    /*是否可以绘制白板数据，是否显示白板工具条*/
    //    "canDrawWhiteBorad":"1",
    //    /*是否需要显示页码同步按钮*/
    //    "canNeedSyncPagebtn":"1",
    //    /*是否可以向远端发送跳转pdf教材命令*/
    //    "canSendChangePageNum":"0",
    //    /*是否可以清空远端的白板数据*/
    //    "canSendClearWhiteDataToRemote":"1",
    //    /*是否可以回退远端的白板数据*/
    //    "canSendUndoWhiteDataToRemote":"1",
    //    /*是否可以举手，申请上麦*/
    //    "canHandler":"1",
    //    /*是否可以发送文本聊天消息*/
    //    "canSendMsg":"1",
    //    /*是否可以在教室内发送文本聊天消息（用于全体禁言和全体解禁）*/
    //    "canSendMsgInClassRoom":"0",
    //    /*是否可以发送音频上行数据*/
    //    "canAudioUpload":"1",
    //    /*是否可以发送视频上行数据*/
    //    "canVideoUpload":"1",
    //    /*是否可以订阅视频下行数据*/
    //    "canVideoDownload":"1",
    //    /*是否要显示老师提示语工具条*/
    //    "canShowTeacherTipsTool":"0",
    //    /*是否可以设置其他用户上下麦*/
    //    "canSetOtherHand":"0",
    //    /*是否可以录音*/
    //    "canRecode":"1",
    //    /*可以设置其他人教室内的一些权限*/
    //    "canSetCommon":"0",
    //    /*是否可以踢人出教室*/
    //    "canKickUser":"0",
    //    /*是否允许发送互动问题*/
    //    "canSendQuestionHudong":"0",
    //    /*是否允许回答互动问题*/
    //    "canSendAnswerHudong":"0",
    //    /*白板工具的笔触颜色RGBA  0x0078ffff*/
    //    "whiteSrokeColor":"7929855",
    //    /*聊天消息右键菜单的样式 0为不显示右键菜单  2为显示老师应该显示的菜单*/
    //    "chatItemMenuType":"0",
    //    /*是否显示level等级标签*/
    //    "canShowLevelTag":"1",
    //    /*是否允许切换视频窗口*/
    //    "canSwapVideoWindow":"1",
    //    /*是否允许关闭自己的摄像头*/
    //    "canCloseOrOpenMyCamera":"1",
    //    /*是否显示并渲染本地视频窗口*/
    //    "canShowlocalView":"1",
    //    /*是否可以控制麦克风  静音和恢复*/
    //    "canControlMic":"1",
    //    /*是否显示"只看老师复选框"rr*/
    //    "canShowOnlytea":"1",
    //    /*"想对对方说"控件的显示样式,0为不显示 2为显示"想对老师说"  1为显示"想对学生说"*/
    //    "toSayStyle":"2",
    //    /*是否允许用户手动翻页*/
    //    "canToPage":"1",
    //    /*是否需要对教材尺寸进行特殊处理*/
    //    "needPDFSpecialTreatment":"0",
    //    /*是否可以显示"课后评价面板"*/
    //    "canShowEvaluePanel":"1",
    //    /*是否需要统计svc单次连接时长*/
    //    "needCountSVCLinkTime":"1",
    //    /*是否显示白板工具条的"tips"*/
    //    "canShowWhiteboardTips":"1",
    //    /*用户类型分组,同一个人可以属于多个分组,但分组不能冲突,比如"0,4"是可以的,但是"0,1"是不可以的 0为学生(无论是stu还是stu_pso都是学生)  1为老师  2为销售  3为flashTeacher  4为教室内部的管理员*/
    //    "group":"0",
    //    /*星星工具条的显示状态 0为不显示  1为显示学生样式 2为显示老师样式*/
    //    "starToolBarStyle":"0",
    //    /*是否支持截屏流 0为不支持 1为支持*/
    //    "supportScreenshots":"0",
    //    /*是否开启截屏流功能 0为不开启 1为开启*/
    //    "enableScrrenshots":"0",
    //    /*默认每秒截屏张数，默认为每秒6张*/
    //    "defaultPagePerSecond":"6"
    //};
    //
    //
    ///**
    // * 老师默认配置
    // * */
    //var teaDefaultConfig = {
    //    /*是否可以发送光标同步数据*/
    //    "canSendMousePos":"1",
    //    /*是否可以接收光标同步数据*/
    //    "canReceiveMousePos":"0",
    //    /*是否可以绘制白板数据，是否显示白板工具条*/
    //    "canDrawWhiteBorad":"1",
    //    /*是否需要显示页码同步按钮*/
    //    "canNeedSyncPagebtn":"0",
    //    /*是否可以向远端发送跳转pdf教材命令*/
    //    "canSendChangePageNum":"1",
    //    /*是否可以清空远端的白板数据*/
    //    "canSendClearWhiteDataToRemote":"1",
    //    /*是否可以回退远端的白板数据*/
    //    "canSendUndoWhiteDataToRemote":"1",
    //    /*是否可以举手，申请上麦*/
    //    "canHandler":"0",
    //    /*是否可以发送文本聊天消息*/
    //    "canSendMsg":"1",
    //    /*是否可以在教室内发送文本聊天消息（用于全体禁言和全体解禁）*/
    //    "canSendMsgInClassRoom":"1",
    //    /*是否可以发送音频上行数据*/
    //    "canAudioUpload":"1",
    //    /*是否可以发送视频上行数据*/
    //    "canVideoUpload":"1",
    //    /*是否可以订阅视频下行数据*/
    //    "canVideoDownload":"1",
    //    /*是否要显示老师提示语工具条*/
    //    "canShowTeacherTipsTool":"1",
    //    /*是否可以设置其他用户上下麦*/
    //    "canSetOtherHand":"1",
    //    /*是否可以录音*/
    //    "canRecode":"1",
    //    /*可以设置其他人教室内的一些权限*/
    //    "canSetCommon":"1",
    //    /*是否可以踢人出教室*/
    //    "canKickUser":"1",
    //    /*是否允许发送互动问题*/
    //    "canSendQuestionHudong":"0",
    //    /*是否允许回答互动问题*/
    //    "canSendAnswerHudong":"0",
    //    /*白板工具的笔触颜色RGBA  0x0078ffff*/
    //    "whiteSrokeColor":"4278190335",
    //    /*聊天消息右键菜单的样式 0为不显示右键菜单  2为显示老师应该显示的菜单*/
    //    "chatItemMenuType":"2",
    //    /*是否显示level等级标签*/
    //    "canShowLevelTag":"0",
    //    /*是否允许切换视频窗口*/
    //    "canSwapVideoWindow":"1",
    //    /*是否允许关闭自己的摄像头*/
    //    "canCloseOrOpenMyCamera":"0",
    //    /*是否显示并渲染本地视频窗口*/
    //    "canShowlocalView":"1",
    //    /*是否可以控制麦克风  静音和恢复*/
    //    "canControlMic":"1",
    //    /*是否显示"只看老师复选框"rr*/
    //    "canShowOnlytea":"0",
    //    /*"想对对方说"控件的显示样式,0为不显示 2为显示"想对老师说"  1为显示"想对学生说"*/
    //    "toSayStyle":"0",
    //    /*是否允许用户手动翻页*/
    //    "canToPage":"1",
    //    /*是否需要对教材尺寸进行特殊处理*/
    //    "needPDFSpecialTreatment":"1",
    //    /*是否可以显示"课后评价面板"*/
    //    "canShowEvaluePanel":"0",
    //    /*是否需要统计svc单次连接时长*/
    //    "needCountSVCLinkTime":"1",
    //    /*是否显示白板工具条的"tips"*/
    //    "canShowWhiteboardTips":"0",
    //    /*用户类型分组,同一个人可以属于多个分组,但分组不能冲突,比如"0,4"是可以的,但是"0,1"是不可以的 0为学生(无论是stu还是stu_pso都是学生)  1为老师  2为销售  3为flashTeacher  4为教室内部的管理员*/
    //    "group":"1",
    //    /*星星工具条的显示状态 0为不显示  1为显示学生样式 2为显示老师样式*/
    //    "starToolBarStyle":"0",
    //    /*是否支持截屏流 0为不支持 1为支持*/
    //    "supportScreenshots":"0",
    //    /*是否开启截屏流功能 0为不开启 1为开启*/
    //    "enableScrrenshots":"0",
    //    /*默认每秒截屏张数，默认为每秒6张*/
    //    "defaultPagePerSecond":"1"
    //};
    //
    //
    ///**
    // * 管理员默认配置
    // * */
    //var adminDefaultConfig = {
    //    /*是否可以发送光标同步数据*/
    //    "canSendMousePos":"0",
    //    /*是否可以接收光标同步数据*/
    //    "canReceiveMousePos":"1",
    //    /*是否可以绘制白板数据，是否显示白板工具条*/
    //    "canDrawWhiteBorad":"1",
    //    /*是否需要显示页码同步按钮*/
    //    "canNeedSyncPagebtn":"1",
    //    /*是否可以向远端发送跳转pdf教材命令*/
    //    "canSendChangePageNum":"0",
    //    /*是否可以清空远端的白板数据*/
    //    "canSendClearWhiteDataToRemote":"1",
    //    /*是否可以回退远端的白板数据*/
    //    "canSendUndoWhiteDataToRemote":"1",
    //    /*是否可以举手，申请上麦*/
    //    "canHandler":"1",
    //    /*是否可以发送文本聊天消息*/
    //    "canSendMsg":"1",
    //    /*是否可以在教室内发送文本聊天消息（用于全体禁言和全体解禁）*/
    //    "canSendMsgInClassRoom":"0",
    //    /*是否可以发送音频上行数据*/
    //    "canAudioUpload":"1",
    //    /*是否可以发送视频上行数据*/
    //    "canVideoUpload":"1",
    //    /*是否可以订阅视频下行数据*/
    //    "canVideoDownload":"1",
    //    /*是否要显示老师提示语工具条*/
    //    "canShowTeacherTipsTool":"0",
    //    /*是否可以设置其他用户上下麦*/
    //    "canSetOtherHand":"0",
    //    /*是否可以录音*/
    //    "canRecode":"1",
    //    /*可以设置其他人教室内的一些权限*/
    //    "canSetCommon":"0",
    //    /*是否可以踢人出教室*/
    //    "canKickUser":"0",
    //    /*是否允许发送互动问题*/
    //    "canSendQuestionHudong":"0",
    //    /*是否允许回答互动问题*/
    //    "canSendAnswerHudong":"0",
    //    /*白板工具的笔触颜色RGBA  0x0078ffff*/
    //    "whiteSrokeColor":"7929855",
    //    /*聊天消息右键菜单的样式 0为不显示右键菜单  2为显示老师应该显示的菜单*/
    //    "chatItemMenuType":"0",
    //    /*是否显示level等级标签*/
    //    "canShowLevelTag":"1",
    //    /*是否允许切换视频窗口*/
    //    "canSwapVideoWindow":"1",
    //    /*是否允许关闭自己的摄像头*/
    //    "canCloseOrOpenMyCamera":"1",
    //    /*是否显示并渲染本地视频窗口*/
    //    "canShowlocalView":"1",
    //    /*是否可以控制麦克风  静音和恢复*/
    //    "canControlMic":"1",
    //    /*是否显示"只看老师复选框"rr*/
    //    "canShowOnlytea":"1",
    //    /*"想对对方说"控件的显示样式,0为不显示 2为显示"想对老师说"  1为显示"想对学生说"*/
    //    "toSayStyle":"0",
    //    /*是否允许用户手动翻页*/
    //    "canToPage":"1",
    //    /*是否需要对教材尺寸进行特殊处理*/
    //    "needPDFSpecialTreatment":"0",
    //    /*是否可以显示"课后评价面板"*/
    //    "canShowEvaluePanel":"1",
    //    /*是否需要统计svc单次连接时长*/
    //    "needCountSVCLinkTime":"1",
    //    /*是否显示白板工具条的"tips"*/
    //    "canShowWhiteboardTips":"1",
    //    /*用户类型分组,同一个人可以属于多个分组,但分组不能冲突,比如"0,4"是可以的,但是"0,1"是不可以的 0为学生(无论是stu还是stu_pso都是学生)  1为老师  2为销售  3为flashTeacher  4为教室内部的管理员*/
    //    "group":"4",
    //    /*星星工具条的显示状态 0为不显示  1为显示学生样式 2为显示老师样式*/
    //    "starToolBarStyle":"0",
    //    /*是否支持截屏流 0为不支持 1为支持*/
    //    "supportScreenshots":"0",
    //    /*是否开启截屏流功能 0为不开启 1为开启*/
    //    "enableScrrenshots":"0",
    //    /*默认每秒截屏张数，默认为每秒6张*/
    //    "defaultPagePerSecond":"6"
    //};

    var defaultGKQEConfig = null;
    /**
     * 服务器端配置
     * */
    this.serverConfig = {};


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

    this.initDefaultGKQE = function(){
        if(this.defaultGKQEConfig == null) {
            this.defaultGKQEConfig = {};
            //成人音视频普通课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=1&course_style=0&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "0"
            }
            //青少音视频普通课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=2&course_style=0&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "1"

            }
            //美小音视频普通课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=3&course_style=0&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "1"
            }
            //成人音视频体验课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=1&course_style=3&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "0"
            }
            //青少音视频体验课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=2&course_style=3&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "1"
            }
            //美小音视频体验课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=3&course_style=3&mac_role_style=0&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "1"
            }
            //PSO培训课--学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&course_type_ex=2&user_occup=1&course_style=6&mac_role_style=5&"] = {
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "0"
            }
            //成人音视频普通/体验课—老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=1&course_style=0&mac_role_style=1&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "0"

            }
            //青少音视频普通/体验课—老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=2&course_style=0&mac_role_style=1&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "2"

            }
            //美小音视频普通/体验课—老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=3&course_style=0&mac_role_style=1&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "2"
            }
            //成人音视频普通/体验课—多身份老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=1&course_style=0&mac_role_style=4&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "0"
            }
            //青少音视频普通/体验课—多身份老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=2&course_style=0&mac_role_style=4&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "2"
            }
            //美小音视频普通/体验课—多身份老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&user_occup=3&course_style=0&mac_role_style=4&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "2"
            }
            //PSO培训课--老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1v1&course_type_ex=2&user_occup=1&course_style=6&mac_role_style=6&"] = {
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "1",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "0"
            }
            //1对多通用课程—学生
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1vn&mac_role_style=0&"]={
                "canSendMousePos": "0",
                "canReceiveMousePos": "1",
                "canDrawWhiteBorad": "0",
                "canNeedSyncPagebtn": "1",
                "canSendChangePageNum": "0",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "1",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "0",
                "canAudioUpload": "1",
                "canVideoUpload": "0",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "0",
                "canSetOtherHand": "0",
                "canRecode": "1",
                "canSetCommon": "0",
                "canKickUser": "0",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "7929855",
                "chatItemMenuType": "0",
                "canShowLevelTag": "1",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "1",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "1",
                "toSayStyle": "2",
                "canToPage": "1",
                "needPDFSpecialTreatment": "0",
                "canShowEvaluePanel": "1",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "1",
                "group": "0",
                "starToolBarStyle": "0"
            }
            //1对多通用课程—老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1vn&mac_role_style=4&"]={
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "0",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "0"
            }
            //1对多通用课程—多身份老师
            this.defaultGKQEConfig["strategy=ClassRoom_Base_1vn&mac_role_style=1&"]={
                
                "canSendMousePos": "1",
                "canReceiveMousePos": "0",
                "canDrawWhiteBorad": "1",
                "canNeedSyncPagebtn": "0",
                "canSendChangePageNum": "1",
                "canSendClearWhiteDataToRemote": "1",
                "canSendUndoWhiteDataToRemote": "1",
                "canHandler": "0",
                "canSendMsg": "1",
                "canSendMsgInClassRoom": "1",
                "canAudioUpload": "1",
                "canVideoUpload": "0",
                "canVideoDownload": "1",
                "canShowTeacherTipsTool": "1",
                "canSetOtherHand": "1",
                "canRecode": "0",
                "canSetCommon": "1",
                "canKickUser": "1",
                "canSendQuestionHudong": "0",
                "canSendAnswerHudong": "0",
                "whiteSrokeColor": "4278190335",
                "chatItemMenuType": "2",
                "canShowLevelTag": "0",
                "canSwapVideoWindow": "1",
                "canCloseOrOpenMyCamera": "0",
                "canShowlocalView": "1",
                "canControlMic": "1",
                "canShowOnlytea": "0",
                "toSayStyle": "0",
                "canToPage": "1",
                "needPDFSpecialTreatment": "1",
                "canShowEvaluePanel": "0",
                "needCountSVCLinkTime": "1",
                "canShowWhiteboardTips": "0",
                "group": "1",
                "starToolBarStyle": "0"
            }
            this.defaultGKQEConfig["strategy=Mac_Intelligent_Perception&"]={
                /*开关,0-关闭，1-打开*/
                "enable":"1",
                /*上报前需取本地设备次数*/
                "getdervicecount":"6",
                /*每次取本地设备状态间隔时间*/
                "getdervicetime":"5",
                /*扬声器低于警告值提示警告*/
                "speakerwarning":"30",
                /*麦克风于警告值提示警告*/
                "micphonewarning":"30",
                /*cpu状态占用变差阈值*/
                "cpuwarningvalue":"80",
                /*cpu变差报警次数阈值*/
                "cpuwarningtimes":"3",
                /*内存变差占用阈值*/
                "memorywarningvalue":"80",
                /*内存变差报警次数阈值*/
                "memorywarningtimes":"3",
                /*本地上行丢包报警阈值，超过阈值报警，单位百分比*/
                "uploadpacketlosswarningrate":"30",
                /*本地上行丢包超过阈值报警，变差次数，超过次数认为麦克风连接异常*/
                "uploadpacketlosswarningtimes":"4",
                /*本地上行丢包连接中断阈值，超过阈值认为连接中断*/
                "uploadpacketnoconnectvalue":"80",
                /*本地上行丢包连接最近出现连续次数,默认只有最近两次出现上行丢包超过中断阈值认为是连接中断*/
                "uploadpacketnoconnecttimes":"2",
                /*本地下行丢包报警阈值，超过阈值报警，单位百分比*/
                "downloadpacketlosswarningrate":"30",
                /*本地下行丢包超过阈值报警，变差次数，超过次数认为扬声器连接异常*/
                "downloadpacketlosswarningtimes":"4",
                /*本地下行丢包连接中断阈值，超过阈值认为连接中断*/
                "downloadpacketnoconnectvalue":"80",
                /*本地下行丢包连接最近出现连续次数,默认只有最近两次出现下行丢包超过中断阈值认为是连接中断*/
                "downloadpacketnoconnecttimes":"2",
                /*p2s延迟阈值,单位ms*/
                "p2sdelay":"800",
                /*p2s变差次数判断*/
                "p2sdelaywarningtimes":"3"
            }
            this.defaultGKQEConfig["strategy=MAC_classlist_Config&mac_role_style=1&"]={
                /*是否显示备用教室入口*/
                "canShowBackupView":"1",
                /*备用教室获取时间段*/
                "backupGettime":"3600"
            }
            this.defaultGKQEConfig["strategy=MAC_classlist_Config&mac_role_style=4&"]={
                /*是否显示备用教室入口*/
                "canShowBackupView":"1",
                /*备用教室获取时间段*/
                "backupGettime":"3600"
            }
            this.defaultGKQEConfig["strategy=MAC_classlist_Config&mac_role_style=0&"]={
                /*是否显示备用教室入口*/
                "canShowBackupView":"0",
                /*备用教室获取时间段*/
                "backupGettime":"3600"
            }
            this.defaultGKQEConfig["strategy=MAC_ToolConfig&"]={
                /*在关闭app后是否要维持talksafer进程继续运行*/
                "needKeepTalkSafer":"0"
            }
            
            // 截屏流GKQE配置信息
            // 学生
            this.defaultGKQEConfig["strategy=MAC_Snapshots_config&mac_role_style=0"]={
                /*是否支持截屏流*/
                "supportScreenshots":"1",
                /*是否开启截屏流*/
                "enableScrrenshots":"1",
                /*默认每秒截的帧数*/
                "defaultPagePerSecond":"4",
                /*默认截屏的的长度*/
                "defaultSnapshotsHeight":"360",
                /*默认截屏的宽度*/
                "defaultSnapshotsWidth":"640"
            }
            // 老师
            this.defaultGKQEConfig["strategy=MAC_Snapshots_config&mac_role_style=1"]={
                /*是否支持截屏流*/
                "supportScreenshots":"1",
                /*是否开启截屏流*/
                "enableScrrenshots":"0",
                /*默认每秒截的帧数*/
                "defaultPagePerSecond":"4",
                /*默认截屏的的长度*/
                "defaultSnapshotsHeight":"360",
                /*默认截屏的宽度*/
                "defaultSnapshotsWidth":"640"
            }
            // 默认
            this.defaultGKQEConfig["strategy=MAC_Snapshots_config&mac_role_style=4"]={
                /*是否支持截屏流*/
                "supportScreenshots":"1",
                /*是否开启截屏流*/
                "enableScrrenshots":"0",
                /*默认每秒截的帧数*/
                "defaultPagePerSecond":"4",
                /*默认截屏的的长度*/
                "defaultSnapshotsHeight":"360",
                /*默认截屏的宽度*/
                "defaultSnapshotsWidth":"640"
            }
            
            // 商汤美颜GKQE配置信息
            // 学生
            // isShowWhiten 用来配置是否显示美白
            // canWhiten 用来配置显示几档美白
            // whiten 用来配置默认的美白项
            this.defaultGKQEConfig["strategy=MAC_st_config&mac_role_style=0"]={
                /*美颜默认开启，1为开启，0为不开启*/
                "enableBeauty": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canEnlargeeye": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkface": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkjaw": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canSmooth": "1",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canContrast": "0",
                /*美颜开启时的美白默认选中值，有六档: 0~5，默认选中1*/
                 "canWhiten": "5",
                 /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowEnlargeeye": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkface": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkjaw": "0",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowSmooth": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowContrast": "0",
                /*美颜选项美白选项是否显示，有六档: 0~5，默认值为5，显示5档，0时不显示*/
                "isShowWhiten": "0",
                /*美颜参数值*/
                "EnlargeeyeParam": "20",
                "ShrinkfaceParam": "20",
                "ShrinkjawParam": "0",
                "SmoothParam": "20",
                "ContrastParam": "0",
                "Whiten": "1",
                /*用于判断是否一直上报人脸状态的变化, 0为只有进教室是上报一次，检测后之后
                 不再上报，1为一直上报，默认为0*/
                "isReportFaceChangeAllTime": "0"
            }
            
            // 老师
            this.defaultGKQEConfig["strategy=MAC_st_config&mac_role_style=1"]={
                /*美颜默认开启，1为开启，0为不开启*/
                "enableBeauty": "1",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canEnlargeeye": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkface": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkjaw": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canSmooth": "1",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canContrast": "0",
                /*美颜开启时的美白默认选中值，有六档: 0~5，默认选中1*/
                 "canWhiten": "5",
                 /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowEnlargeeye": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkface": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkjaw": "0",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowSmooth": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowContrast": "0",
                /*美颜选项美白选项是否显示，有六档: 0~5，默认值为5，显示5档，0时不显示*/
                "isShowWhiten": "0",
                /*美颜参数值*/
                "EnlargeeyeParam": "20",
                "ShrinkfaceParam": "20",
                "ShrinkjawParam": "0",
                "SmoothParam": "20",
                "ContrastParam": "0",
                "Whiten": "1",
                /*用于判断是否一直上报人脸状态的变化, 0为只有进教室是上报一次，检测后之后
                 不再上报，1为一直上报，默认为0*/
                "isReportFaceChangeAllTime": "0"
            }
            
            this.defaultGKQEConfig["strategy=MAC_st_config&mac_role_style=4"]={
                /*美颜默认开启，1为开启，0为不开启*/
                "enableBeauty": "1",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canEnlargeeye": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkface": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canShrinkjaw": "0",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canSmooth": "1",
                /*美颜开启时的默认选中值，1为选中，0位不选中*/
                "canContrast": "0",
                /*美颜开启时的美白默认选中值，有六档: 0~5，默认选中1*/
                "canWhiten": "5",
                 /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowEnlargeeye": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkface": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowShrinkjaw": "0",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowSmooth": "1",
                /*美颜选项是否显示，1位显示，0位不显示*/
                "isShowContrast": "0",
                /*美颜选项美白选项是否显示，有六档: 0~5，默认值为5，显示5档，0时不显示*/
                "isShowWhiten": "0",
                /*美颜参数值*/
                "EnlargeeyeParam": "20",
                "ShrinkfaceParam": "20",
                "ShrinkjawParam": "0",
                "SmoothParam": "20",
                "ContrastParam": "0",
                "Whiten": "1",
                /*用于判断是否一直上报人脸状态的变化, 0为只有进教室是上报一次，检测后之后
                 不再上报，1为一直上报，默认为0*/
                "isReportFaceChangeAllTime": "0"
            }
            
        }

        return this.defaultGKQEConfig;
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
     * @param reqUrl 接口地址
     * */
    this.requestGKQE = function(argObj,reqUrl){
        //currentGKQEID可以防止多次并发请求误操作
        if(currentGKQEID > 0xffffffff - 1)
        {
           currentGKQEID = 0;
        }else{
           currentGKQEID++;
        };
        this.serverConfig["reqId"] = argObj.reqId;
        var loader = new GKQELoader(argObj.reqId + "_" +currentGKQEID,reqUrl);
        loader.loadData(
            argObj,
            function(id,strategy,data,reqData){
                selfInstance.strategy = strategy
                selfInstance.reqData = reqData;
                selfInstance.jiexiGKQE(data);
            },
            function(id,strategy,err){
                selfInstance.info = "请求GKQE接口的策略:"+strategy+"时出错,错误:" + err.responseText;
                selfInstance.strategy = strategy
                selfInstance.dispatchEvent(new Event(GKQEManager.RequestErr));
            }
        );
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
                this.info = this.strategy + '的json数据转换失败,原因:' + err;
                this.dispatchEvent(new Event(GKQEManager.CovertErr));
                b = false;
            }
            if(b == false){
                return;
            }
            //for(key in serData){
            //    this.serverConfig[key] = serData[key];
            //}
            this.serverConfig = serData;
            console.log(JSON.stringify(this.serverConfig));
            this.info = this.strategy + '的配置加载完毕'
            this.dispatchEvent(new Event(GKQEManager.Complete));
        }else{
            //由于某些原因未能查到指定条件对应的GKQE
            var errinfo = resObj['remindMsg'] || "";
            this.info = this.strategy + '的配置加载出现问题,原因是服务器端返回了错误:' + errinfo;
            this.dispatchEvent(new Event(GKQEManager.ServerErr));
        }
    }

    /**
     * 获取GKQE的某个配置值
     * */
    this.getConfig = function(key){
        var val = this.serverConfig[key] || "0";
        return val;
    }

    /**
     * 临时设置GKQE的某个配置值
     * */
    this.setConfig = function(key,value){
        if(key != null && key != "" && value != null){
            this.serverConfig[key] = value;
        }
    }
}
GKQEManager.CovertErr = 'corvertErr'
GKQEManager.ServerErr = 'serverGKQEErr';
GKQEManager.Complete = 'requestGKQEComplete';
GKQEManager.RequestErr = 'requestGKQEErr';

GKQEManager.instance = new GKQEManager();
GKQEManager.instance.ginit();




function GKQELoader(_id,reqUrl){
    //唯一ID
    const id = _id;
    //获取GKQE配置信息的url
    var getGKQEInfoURL = reqUrl || 'http://t6.51talk.com/Ac/AcConf/getGKAndQE';
    //接口请求的超时时间
    var tout = 10000;
    //要请求的接口数据的数据类型
    var requetDataType = 'jsonp';
    var jsonpCallBackName = 'jsoncallback';
    //用于数据请求的请求类型
    var requestMethod = 'post';
    //策略名
    var strategy = ''
    this.loadData = function(argObj,compFunc,errFun){
        //alert(JSON.stringify(argObj))
        strategy = argObj["strategy"];
        $.ajax({
            url:getGKQEInfoURL,
            timeout:tout,//默认请求超时时间30秒
            dataType:requetDataType,
            jsonp:jsonpCallBackName,
            type:requestMethod,
            data:argObj,
            success:function(data,b){
                //ons.notification.alert(JSON.stringify(data));
                if(compFunc != null && compFunc != undefined){
                    compFunc(id,strategy,data,argObj);
                }
            },
            error:function(err){
                //alert(err.responseText);
                if(errFun != null && errFun != undefined){
                    errFun(id,strategy,err);
                }
            }
        })
    }
}
