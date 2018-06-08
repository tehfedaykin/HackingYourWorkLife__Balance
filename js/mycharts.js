var basicChart = undefined;
var preChaosChart = undefined;
var chaosChart = undefined;
var beforeAutomatingChart = undefined;
var afterAutomatingChart = undefined;
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
  if (event.currentSlide.getAttribute('id') === 'preChaosChart' && !preChaosChart) {
    document.getElementById('preChaosScatter').setAttribute("style","height:" + windowHeight + "px");
    var ogData = _.cloneDeep(defData);

    preChaosChart = new Taucharts.Chart({
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
      data: ogData,
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
    preChaosChart.renderTo('#preChaosScatter');

    // var chaosData = _.map(ogData, function(data) {
    //   if (data.item === 'home maintenance') {
    //     data.importance = .5;
    //     data.effort = 30;
    //     data.urgency = .5;
    //   }
    //   else {
    //     data.importance = data.importance * 2.5;
    //   }
    //   return data;
    // });

    // setTimeout(function() {
    //   preChaosChart.setData(chaosData);
    // }, 3000);

    // var firstChart = true;
    console.log('first', ogData[0]);
    // setInterval(function(){
    //   if (firstChart) {
    //     console.log('chaos', chaosData[0]);
    //     preChaosChart.setData(chaosData);
    //     firstChart = false;
    //   }
    //   else {
    //     console.log('non-chaos', ogData[0]);
    //     preChaosChart.setData(ogData);
    //     firstChart = true;
    //   };
    // }, 3000);

  }
  if (event.currentSlide.getAttribute('id') === 'chaosChart' && !chaosChart) {
    document.getElementById('chaosScatter').setAttribute("style","height:" + windowHeight + "px");
    var ogData = _.cloneDeep(defData);
    var chaosData = _.map(ogData, function(data) {
      if (data.item === 'home maintenance') {
        data.importance = .5;
        data.effort = 30;
        data.urgency = .5;
      }
      else {
        data.importance = data.importance * 2.5;
      }
      return data;
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
      data: chaosData,
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
  }

  if (event.currentSlide.getAttribute('id') === 'beforeAutomating' && !beforeAutomatingChart) {
    document.getElementById('beforeAutomatingScatter').setAttribute("style","height:" + windowHeight + "px");
    var ogData = _.cloneDeep(defData);
    beforeAutomatingChart = new Taucharts.Chart({
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
      data: ogData,
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
    beforeAutomatingChart.renderTo('#beforeAutomatingScatter');
  }
  if (event.currentSlide.getAttribute('id') === 'afterAutomating' && !afterAutomatingChart) {
    document.getElementById('afterAutomatingScatter').setAttribute("style","height:" + windowHeight + "px");

    var ogData = _.cloneDeep(defData);
    var afterAutomating = _.map(ogData, function(data) {
      if (data.area === 'life') {
        data.effort = data.effort/3;
      }
      return data;
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
      data: afterAutomating,
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
  }
  // if (event.currentSlide.getAttribute('id') === 'worklifeblankrotate') {
  //   setTimeout(function() {
  //     var img = document.getElementById('torotate');
  //     img.className += " rotate";
  //
  //   }, 1000)
  // }
});
