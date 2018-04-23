{
  new Vue({
    el: '.js-component01',
    data: {
      text: 'Textテキストてきすと'
    }
  });
  new Vue({
    el: '.js-component02',
    data: {
      text: ''
    }
  });
  new Vue({
    el: '.js-component03',
    data: {
      input: '',
      text: ''
    },
    methods: {
      output: function(){
        this.text = '<' + this.input + '>';
      }
    }
  });
  new Vue({
    el: '.js-component04',
    data: {
      input: '',
      html: ''
    },
    methods: {
      output: function(){
        this.html = '<span style="color: #fc0;">' + this.input + '</span>';
      }
    }
  });
  new Vue({
    el: '.js-component05',
    data: {
      number: ''
    }
  });
  new Vue({
    el: '.js-component06',
    data: {
      text: ''
    },
    filters: {
      toUpperCase: function(value){
        if(!value) return ''
        value=value.toString()
        return value.toUpperCase()
      }
    }
  });
}
