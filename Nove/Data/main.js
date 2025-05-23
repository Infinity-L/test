new Vue({
    el:'#app',
    data: {
        URL99: {
            filePass: '世界上最近的地方.html',
            rootPass: './'},
        URL00: {
            filePass: 'Data/Novel/'+'7/4/3/'+'开始.html',
            rootPass: '../../'+'../../../'+'./'},
        URL01: {
            filePass: 'Data/Novel/'+'2/8/3/'+'第一个房间/观察三人的苏醒.html',
            rootPass: '../../'+'../../../'+'../'},
        URL02: {
            filePass: 'Data/Novel/'+'1/4/9/'+'第一个房间/观察阅读板子上文字的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL02_sub1: {
            filePass: 'Data/Novel/'+'1/4/9/'+'第一个房间/观察阅读板子上文字的三人/红色按钮.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL02_sub2: {
            filePass: 'Data/Novel/'+'1/4/9/'+'第一个房间/观察阅读板子上文字的三人/蓝色按钮.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL02_sub3: {
            filePass: 'Data/Novel/'+'1/4/9/'+'第一个房间/观察阅读板子上文字的三人/绿色按钮.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL02_sub4: {
            filePass: 'Data/Novel/'+'1/4/9/'+'第一个房间/观察阅读板子上文字的三人/悠马.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL03_1: {
            filePass: 'Data/Novel/'+'1/3/1/'+'第一个房间/观察按下红色按钮的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL03_1_sub1: {
            filePass: 'Data/Novel/'+'1/3/1/'+'第一个房间/观察按下红色按钮的三人/用血写下的文字.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL03_2: {
            filePass: 'Data/Novel/'+'6/0/2/'+'第一个房间/观察按下蓝色按钮的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL03_3: {
            filePass: 'Data/Novel/'+'6/6/0/'+'第一个房间/观察按下绿色按钮的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL04: {
            filePass: 'Data/Novel/'+'2/7/3/'+'第二个房间/观察进入了第二个房间的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL04_sub1: {
            filePass: 'Data/Novel/'+'2/7/3/'+'第二个房间/观察进入了第二个房间的三人/房间.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL04_sub2: {
            filePass: 'Data/Novel/'+'2/7/3/'+'第二个房间/观察进入了第二个房间的三人/春人.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL04_sub3: {
            filePass: 'Data/Novel/'+'2/7/3/'+'第二个房间/观察进入了第二个房间的三人/四周.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL05: {
            filePass: 'Data/Novel/'+'4/8/2/'+'第二个房间/观察看到门的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL06: {
            filePass: 'Data/Novel/'+'7/1/0/'+'第三个房间/观察进入了第三个房间的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL07_1: {
            filePass: 'Data/Novel/'+'3/8/3/'+'第三个房间/观察没有钥匙的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL07_1_sub1: {
            filePass: 'Data/Novel/'+'3/8/3/'+'第三个房间/观察没有钥匙的三人/房间.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL07_2: {
            filePass: 'Data/Novel/'+'3/8/3/'+'第三个房间/观察有了钥匙的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL07_2_sub1: {
            filePass: 'Data/Novel/'+'3/8/3/'+'第三个房间/观察有了钥匙的三人/房间.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL07_2_Key: '小',
        URL08_1: {
            filePass: 'Data/Novel/'+'1/5/5/'+'第四个房间/观察用小钥匙进入了第四个房间的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL08_1_sub1: {
            filePass: 'Data/Novel/'+'1/5/5/'+'第四个房间/观察用小钥匙进入了第四个房间的三人/房间.html',
            rootPass: '../../'+'../../../'+'../../'},
        URL08_2: {
            filePass: 'Data/Novel/'+'2/4/8/'+'第四个房间/观察用黑色钥匙进入了第四个房间的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL08_2_sub1: {
            filePass: 'Data/Novel/'+'2/4/8/'+'第四个房间/观察用黑色钥匙进入了第四个房间的三人/房间.html',
            rootPass: '../../'},
        URL08_2_Item00: '记事本',
        URL08_2_Item01: '键盘',
        URL08_2_Item02: '剪刀',
        URL08_2_Item03: '铅笔',
        URL08_2_Item04: '透明胶',
        URL08_2_Item05: '牛皮纸',
        URL08_2_Item06: '耳机',
        URL08_2_Item07: '干电池',
        URL08_2_Item08: '毛巾',
        URL08_2_Item09: '签字笔',
        URL08_2_Item10: '毛毯',
        URL08_2_Item11: '一次性筷子',
        URL08_2_Item12: '镜子',
        URL08_2_Item13: '锤子',
        URL08_2_Item14: '塑料袋',
        URL08_2_Item15: '灯泡',
        URL08_2_Item16: '扑克牌',
        URL08_2_Item17: '磁铁',
        URL08_2_Item18: '水枪',
        URL08_2_Item19: '墨镜',
        URL08_2_Item20: '勺子',
        URL08_2_Item21: '彩色铅笔',
        URL08_2_Item22: '螺丝刀',
        URL08_2_Item23: '图钉',
        URL08_2_Item24: '火柴',
        URL09: {
            filePass: 'Data/Novel/'+'2/4/8/'+'第四个房间/观察得到了记事本的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL10: {
            filePass: 'Data/Novel/'+'0/7/5/'+'第五个房间/观察进入了第五个房间的三人.html',
            rootPass: '../../'+'../../../'+'../'},
        URL50: {
            filePass: '世界上最近的地方_幕后.html',
            rootPass: './'},
        URL51: {
            filePass: 'Data/Novel/'+'4/8/7/'+'第一话.html',
            rootPass: '../../'+'../../../'+'./'},
        URL52: {
            filePass: 'Data/Novel/'+'1/1/7/'+'第二话.html',
            rootPass: '../../'+'../../../'+'./'},
        URL53: {
            filePass: 'Data/Novel/'+'9/8/3/'+'第三话.html',
            rootPass: '../../'+'../../../'+'./'},
    }
})


