if(!wx.$getPickerData) {
  wx.$getPickerData = data => {
    return data.map(item => ({
      name: item.name,
      value: item.name,
    }))
  }
}

const getCommon = (data, value) => {
  if(value){ // 优先匹配value，其次再匹配name
    let item = data.filter(item => item.value.toString() == value.toString())[0]
    if(item) { 
      return item ? item.name : item
    }else {
      let item = data.filter(item => item.name == value)[0]
      return item ? item.value : item
    }
  }
  return wx.$getPickerData(data)
}

export const hyjgqj = value => { // 婚宴价格区间
  let data = [{
    name: '1000元以下',
    value: [0, 1000],
  }, {
    name: '1000-2000元',
    value: [1000, 2000],
  }, {
    name: '2000-3000元',
    value: [2000, 3000],
  }, {
    name: '3000-4000元',
    value: [3000, 4000],
  }, {
    name: '4000元以上',
    value: [4000, 0],
  }]
  return getCommon(data, value)
}

export const rnzs = value => { // 容纳桌数
  let data = [{
    name: '10桌以下',
    value: [0, 10],
  }, {
    name: '10-20桌',
    value: [10, 20],
  }, {
    name: '20-30桌',
    value: [20, 30],
  }, {
    name: '30-40桌',
    value: [30, 40],
  }, {
    name: '40桌以上',
    value: [40, 0],
  }]
  return getCommon(data, value)
}


export const jdxj = value => { // 酒店星级
  let data = [{
    name: '三星/舒适',
    value: 3
  }, {
    name: '四星/高档',
    value: 4
  }, {
    name: '五星/豪华',
    value: 5
  }, {
    name: '五星/顶级',
    value: 6
  }]
  return getCommon(data, value)
}
export const rs = value => { // 参会人数
  let data = [{
    name: '10~50人',
    value: [10, 50]
  }, {
    name: '51~100人',
    value: [50, 100]
  }, {
    name: '101~150人',
    value: [101, 150]
  }, {
    name: '151~300人',
    value: [151, 300]
  }, {
    name: '301~500人',
    value: [301, 500]
  }, {
    name: '501~1000人',
    value: [501, 1000]
  }, {
    name: '1000人以上',
    value: [1000, 0]
  }]
  return getCommon(data, value)
}

export const imgType = value => {
  let data = [{
    name: '外观',
    value: 1
  }, {
    name: '大堂',
    value: 2
  }, {
    name: '餐厅',
    value: 3
  }, {
    name: '其他',
    value: 4
  }]
  return getCommon(data, value)
}
export const hyrs = value => {
  let data = [{
    label: '剧院式容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 1, 
  }, {
    label: '课桌式容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 2, 
  }, {
    label: '宴会式容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 3, 
  }, {
    label: '宴会式容纳桌数',
    labelWidth: '320rpx',
    company: '桌',
    type: 4, 
  }, {
    label: '鱼骨式容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 5, 
  }, {
    label: 'U型容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 6, 
  }, {
    label: '回字型容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 7, 
  }, {
    label: '董事会型容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 8, 
  }, {
    label: '酒会容纳人数',
    labelWidth: '320rpx',
    company: '人',
    type: 9, 
  }, {
    label: '宴会圆形卓起订桌数',
    labelWidth: '320rpx',
    company: '人',
    type:  10,
  }]
  if(value){
    let item = data.filter(item => item.label === value)[0]
    if(item) { 
      return item ? item.type : ''
    }else {
      let item = data.filter(item => item.type == value)[0]
      return item ? item.label : ''
    }
  }
  return data
}

export const defaultCity = ['江西省', '南昌市']