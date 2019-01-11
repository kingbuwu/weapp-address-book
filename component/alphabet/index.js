// component/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     list:{
       type:Array,
       value:""
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    alpha: '',
    windowHeight: '',
    addBg: false
  },

  ready:function(){
    try {
      var res = wx.getSystemInfoSync();
      //每一个字母所占的高度
      this.apHeight = res.windowHeight / 26;
      this.setData({ windowHeight: res.windowHeight })
    } catch (e) {

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击
    handlerAlphaTap(e) {
      let { ap } = e.target.dataset;
      this.setData({ alpha: ap });
    },
    //滑动
    handlerMove(e) {
      let { list } = this.data;
      this.setData({ addBg: true });
      let rY = e.touches[0].clientY;//竖向滑动的距离
      if (rY >= 0) {
        let index = Math.ceil((rY - this.apHeight) / this.apHeight);
        if (0 <= index < list.length) {
          let nonwAp = list[index];
          nonwAp && this.setData({ alpha: nonwAp.alphabet });
        }
      }
    },
    //滑动结束
    handlerEnd(e) {
      this.setData({ addBg: false });
    }
  }
})
