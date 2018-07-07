(function(){
  var basicChart = undefined;
  var preChaosChart = undefined;
  var chaosChart = undefined;
  var beforeAutomatingChart = undefined;
  var afterAutomatingChart = undefined;
  var afterAutomatingBarChart = undefined;
  var defData = [
    {
      "area": "work",
      "importance": 1,
      "urgency": 1,
      "effort": 2,
      "priority": "low",
      "item": "paycheck"
    },
    {
      "area": "work",
      "importance": 2,
      "urgency": 1,
      "effort": 1,
      "priority": "low",
      "item": "healthcare"
    },
    {
      "area": "work",
      "importance": 7,
      "urgency": 3,
      "effort": 8,
      "priority": "medium",
      "item": "Typescript learning"
    },
    {
      "area": "work",
      "importance": 6,
      "urgency": 3,
      "effort": 3,
      "priority": "medium",
      "item": "Angular get v. set research"
    },
    {
      "area": "work",
      "importance": 3,
      "urgency": 4,
      "effort": 7,
      "priority": "high",
      "item": "completing sprint work"
    },
    {
      "area": "work",
      "importance": 4,
      "urgency": 6,
      "effort": 8,
      "priority": "medium",
      "item": "refactor scary code"
    },
    {
      "area": "work",
      "importance": 6,
      "urgency": 4,
      "effort": 3,
      "priority": "high",
      "item": "review PRs"
    },
    {
      "area": "work",
      "importance": 8.5,
      "urgency": 3.25,
      "effort": 2,
      "priority": "low",
      "item": "meetings"
    },
    {
      "area": "work",
      "importance": 2,
      "urgency": 2,
      "effort": 1,
      "priority": "high",
      "item": "submit health insurance expense report"
    },
    {
      "area": "life",
      "importance": 2.5,
      "urgency": 1,
      "effort": 1,
      "priority": "high",
      "item": "paying mortgage"
    },
    {
      "area": "life",
      "importance": 1.75,
      "urgency": 1,
      "effort": 1,
      "priority": "high",
      "item": "home maintenance"
    },
    {
      "area": "life",
      "importance": 3.5,
      "urgency": 1,
      "effort": 1,
      "priority": "high",
      "item": "paying bills"
    },
    {
      "area": "life",
      "importance": 7,
      "urgency": 2,
      "effort": 5,
      "priority": "medium",
      "item": "keeping house clean"
    },
    {
      "area": "life",
      "importance": 6,
      "urgency": 8,
      "effort": 3,
      "priority": "medium",
      "item": "gardening"
    },
    {
      "area": "life",
      "importance": 1,
      "urgency": 5,
      "effort": 3,
      "priority": "high",
      "item": "furbaby care"
    },
    {
      "area": "life",
      "importance": 2,
      "urgency": 5.5,
      "effort": 3,
      "priority": "medium",
      "item": "cooking/mealprep"
    },
    {
      "area": "life",
      "importance": 7,
      "urgency": 1,
      "effort": 5,
      "priority": "medium",
      "item": "preparing for family"
    },
    {
      "area": "life",
      "importance": 9.25,
      "urgency": 1.5,
      "effort": 2,
      "priority": "medium",
      "item": "learning to brew kombucha"
    },
    {
      "area": "life",
      "importance": 9.5,
      "urgency": 1,
      "effort": 1,
      "priority": "low",
      "item": "gaming"
    },
    {
      "area": "life",
      "importance": 8.5,
      "urgency": 1,
      "effort": 1,
      "priority": "low",
      "item": "Watching The Bachelor"
    },
    {
      "area": "life",
      "importance": 3,
      "urgency": 1,
      "effort": 6,
      "priority": "medium",
      "item": "time with husband"
    },
    {
      "area": "life",
      "importance": 8,
      "urgency": 1,
      "effort": 2,
      "priority": "low",
      "item": "watch Expanse with husband"
    },
    {
      "area": "life",
      "importance": 4,
      "urgency": 1,
      "effort": 3,
      "priority": "medium",
      "item": "time with friends"
    },
    {
      "area": "life",
      "importance": 2,
      "urgency": 3,
      "effort": 7,
      "priority": "high",
      "item": "fitness"
    },
    {
      "area": "life",
      "importance": .5,
      "urgency": 3,
      "effort": 0,
      "priority": "high",
      "item": "sleep"
    },
    {
      "area": "blank",
      "importance": 8,
      "urgency": 4,
      "effort": 1,
      "priority": "low",
      "item": "updating current talk"
    },
    {
      "area": "blank",
      "importance": 7,
      "urgency": 5,
      "effort": 8,
      "priority": "low",
      "item": "working on a new talk"
    },
    {
      "area": "blank",
      "importance": 3,
      "urgency": 6,
      "effort": 8,
      "priority": "medium",
      "item": "managing non-profit team"
    },
    {
      "area": "blank",
      "importance": 5,
      "urgency": 8,
      "effort": 3,
      "priority": "high",
      "item": "responding to emails"
    },
    {
      "area": "blank",
      "importance": 2,
      "urgency": 8,
      "effort": 8,
      "priority": "high",
      "item": "solving non-profit crisis"
    },
    {
      "area": "blank",
      "importance": 5,
      "urgency": 1,
      "effort": 3,
      "priority": "medium",
      "item": "running non-profit meetings"
    },
    {
      "area": "blank",
      "importance": 7.5,
      "urgency": 1,
      "effort": 6,
      "priority": "medium",
      "item": "mentoring others"
    }
  ];

  function addChaos(dataList) {
    return _.map(dataList, function(data) {
        if (data.item === 'home maintenance') {
          data.importance = data.importance * .5;
          data.effort = data.effort * 30;
          data.urgency = data.urgency * 10;
        }
        else {
          data.importance = data.importance * 2.5;
        }
      return data;
    });
  }

  function removeChaos(data) {
    return _.map(data, function(data) {
        if (data.item === 'home maintenance') {
          data.importance = data.importance/.5;
          data.effort = data.effort/30;
          data.urgency = data.urgency/10;
        }
        else {
          data.importance = data.importance/2.5;
        }
      return data;
    });
  }

  function addAutomation(dataList) {
    return _.map(dataList, function(data) {
      if (data.area === 'life') {
        data.effort = data.effort/3;
      }
      return data;
    });
  }

  function removeAutomation(dataList) {
    return _.map(dataList, function(data) {
      if (data.area === 'life') {
        data.effort = data.effort*3;
      }
      return data;
    });
  }

  $.fn.sparkleh = function( options ) {
    return this.each( function(k,v) {

      var $this = $(v).css("position","relative");

      var settings = $.extend({
        width: $this.outerWidth(),
        height: $this.outerHeight(),
        color: "#FFFFFF",
        count: 30,
        overlap: 0,
        speed: 1
      }, options );

      var sparkle = new Sparkle( $this, settings );
      sparkle.over();
    });
  }

  function Sparkle( $parent, options ) {
    this.options = options;
    this.init( $parent );
  }

  Sparkle.prototype = {
    "init" : function( $parent ) {
      var _this = this;
      this.$canvas =
        $("<canvas>")
          .addClass("sparkle-canvas")
          .css({
            position: "absolute",
            top: "-"+_this.options.overlap+"px",
            left: "-"+_this.options.overlap+"px",
            "pointer-events": "none"
          })
          .appendTo($parent);
      this.canvas = this.$canvas[0];
      this.context = this.canvas.getContext("2d");

      this.sprite = new Image();
      this.sprites = [0,6,13,20];
      this.sprite.src = this.datauri;

      this.canvas.width = this.options.width + ( this.options.overlap * 2);
      this.canvas.height = this.options.height + ( this.options.overlap * 2);

      this.particles = this.createSparkles( this.canvas.width , this.canvas.height );
      this.anim = null;
      this.fade = false;
    },
    "createSparkles" : function( w , h ) {
      var holder = [];
      for( var i = 0; i < this.options.count; i++ ) {
        var color = this.options.color;
        if( this.options.color == "rainbow" ) {
          color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        } else if( $.type(this.options.color) === "array" ) {
          color = this.options.color[ Math.floor(Math.random()*this.options.color.length) ];
        }
        holder[i] = {
          position: {
            x: Math.floor(Math.random()*w),
            y: Math.floor(Math.random()*h)
          },
          style: this.sprites[ Math.floor(Math.random()*4) ],
          delta: {
            x: Math.floor(Math.random() * 1000) - 500,
            y: Math.floor(Math.random() * 1000) - 500
          },
          size: parseFloat((Math.random()*2).toFixed(2)),
          color: color
        };
      }
      return holder;
    },
    "draw" : function( time, fade ) {
      var ctx = this.context;
      ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
      for( var i = 0; i < this.options.count; i++ ) {
        var derpicle = this.particles[i];
        var modulus = Math.floor(Math.random()*7);
        if( Math.floor(time) % modulus === 0 ) {
          derpicle.style = this.sprites[ Math.floor(Math.random()*4) ];
        }
        ctx.save();
        ctx.globalAlpha = derpicle.opacity;
        ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);
        if( this.options.color ) {
          ctx.globalCompositeOperation = "source-atop";
          ctx.globalAlpha = 0.5;
          ctx.fillStyle = derpicle.color;
          ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
        }
        ctx.restore();
      }
    },
    "update" : function() {
       var _this = this;
       this.anim = window.requestAnimationFrame( function(time) {
         for( var i = 0; i < _this.options.count; i++ ) {
           var u = _this.particles[i];
           var randX = ( Math.random() > Math.random()*2 );
           var randY = ( Math.random() > Math.random()*3 );
           if( randX ) {
             u.position.x += ((u.delta.x * _this.options.speed) / 1500);
           }
           if( !randY ) {
             u.position.y -= ((u.delta.y * _this.options.speed) / 800);
           }
           if( u.position.x > _this.canvas.width ) {
             u.position.x = -7;
           } else if ( u.position.x < -7 ) {
             u.position.x = _this.canvas.width;
           }
           if( u.position.y > _this.canvas.height ) {
             u.position.y = -7;
             u.position.x = Math.floor(Math.random()*_this.canvas.width);
           } else if ( u.position.y < -7 ) {
             u.position.y = _this.canvas.height;
             u.position.x = Math.floor(Math.random()*_this.canvas.width);
           }
           if( _this.fade ) {
             u.opacity -= 0.02;
           } else {
             u.opacity -= 0.005;
           }
           if( u.opacity <= 0 ) {
             u.opacity = ( _this.fade ) ? 0 : 1;
           }
         }
         _this.draw( time );
         if( _this.fade ) {
           _this.fadeCount -= 1;
           if( _this.fadeCount < 0 ) {
             window.cancelAnimationFrame( _this.anim );
           } else {
             _this.update();
           }
         } else {
           _this.update();
         }
       });
    },
    "cancel" : function() {
      this.fadeCount = 100;
    },
    "over" : function() {
      window.cancelAnimationFrame( this.anim );
      for( var i = 0; i < this.options.count; i++ ) {
        this.particles[i].opacity = Math.random();
      }
      this.fade = false;
      this.update();
    },
    "out" : function() {
      this.fade = true;
      this.cancel();
    },
    "datauri" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="
  };

  Reveal.addEventListener('slidechanged', function( event ) {
    var windowHeight =  parseInt(window.innerHeight, 10) - (90*2);
    if (event.currentSlide.getAttribute('id') === 'chart' && !basicChart) {
      document.getElementById('basicScatter').setAttribute("style","height:" + windowHeight + "px");

      basicChart = new Taucharts.Chart({
        guide: {
          showGridLines:'',
          x: {
            label: {text: 'Importance', padding: 20},
            padding: 10},
          y: {
            label: {text: 'Urgency', padding: 20},
            padding: 10
          },
          // color:{
          //   // brewer:['color-work', 'color-life', 'color-blank']
          //   brewer: {
          //     "work": "color-work",
          //     "life": "color-life",
          //     "blank": "color-blank"
          //   }
          // }
        },
        data: defData,
        type: 'scatterplot',
        x: 'importance',
        y: 'urgency',
        color: 'area',
        size: 'effort',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['item']
          }),
          Taucharts.api.plugins.get('legend')()
        ]
      });
      basicChart.renderTo('#basicScatter');
    }
    if (event.currentSlide.getAttribute('id') === 'chaosChart' && !chaosChart) {
      document.getElementById('chaosScatter').setAttribute("style","height:" + windowHeight + "px");
      var thisData = _.map(defData, function(data) {
        return _.clone(data);
      });

      chaosChart = new Taucharts.Chart({
        guide: {
          showGridLines:'',
          x: {
            label: {text: 'Importance', padding: 20},
            padding: 10},
          y: {
            label: {text: 'Urgency', padding: 20},
            padding: 10
          },
        },
        data: thisData,
        type: 'scatterplot',
        x: 'importance',
        y: 'urgency',
        color: 'area',
        size: 'effort',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['item']
          }),
          Taucharts.api.plugins.get('legend')()
        ]
      });
      chaosChart.renderTo('#chaosScatter');

      var firstChart = true;
      setInterval(function(){
        if (firstChart) {
          chaosChart.setData(addChaos(thisData));
          firstChart = false;
        }
        else {
          chaosChart.setData(removeChaos(thisData));
          firstChart = true;
        };
      }, 3000);
    }

    if (event.currentSlide.getAttribute('id') === 'afterAutomating' && !afterAutomatingChart) {
      document.getElementById('afterAutomatingScatter').setAttribute("style","height:" + windowHeight + "px");
      var thisData = _.map(defData, function(data) {
        return _.clone(data);
      });

      afterAutomatingChart = new Taucharts.Chart({
        guide: {
          showGridLines:'',
          x: {
            label: {text: 'Importance', padding: 20},
            padding: 10},
          y: {
            label: {text: 'Urgency', padding: 20},
            padding: 10
          },
        },
        data: thisData,
        type: 'scatterplot',
        x: 'importance',
        y: 'urgency',
        color: 'area',
        size: 'effort',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['item']
          }),
          Taucharts.api.plugins.get('legend')()
        ]
      });
      afterAutomatingChart.renderTo('#afterAutomatingScatter');

      var firstChart = true;
      setInterval(function(){
        if (firstChart) {
          afterAutomatingChart.setData(addAutomation(thisData));
          firstChart = false;
        }
        else {
          afterAutomatingChart.setData(removeAutomation(thisData));
          firstChart = true;
        };
      }, 3000);
    }

    if (event.currentSlide.getAttribute('id') === 'afterAutomating2' && !afterAutomatingBarChart) {
      document.getElementById('afterAutomatingBar').setAttribute("style","height:" + windowHeight + "px");

      var postData = addAutomation(_.map(defData, function(data) {
        var clonedData = _.clone(data);
        clonedData['state'] = 'after';
        return clonedData;
      }));

      var preData = _.map(defData, function(data) {
        var clonedData = _.clone(data);
        clonedData['state'] = 'before';
        return clonedData;
      }).concat(postData);

      afterAutomatingBarChart = new Taucharts.Chart({
        guide: {
          showGridLines:'',
          x: {
            label: {text: 'Importance', padding: 20},
            padding: 10},
          y: {
            label: {text: 'Effort', padding: 20},
            padding: 10
          },
        },
        data: preData,
        type: 'stacked-bar',
        x: 'state',
        y: 'effort',
        size: 200,
        color: 'area',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['item']
          }),
          Taucharts.api.plugins.get('legend')()
        ]
      });
      afterAutomatingBarChart.renderTo('#afterAutomatingBar');
    }


    if (event.currentSlide.getAttribute('id') === 'trainyourbrain') {
      document.getElementById('focusmusic').play();
    }
    else {
      document.getElementById('focusmusic').pause();
    }

    if(event.currentSlide.getAttribute('id') === 'worklifeblankrotate') {
      $("body").sparkleh({
        color: "rainbow",
        count: 500,
        overlap: 10
      });
    }
  });
})();
