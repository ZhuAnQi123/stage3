function nomalData(data) {
    //  处理 ajax 数据,变成可直接使用的数据
    //我们需要的数据结构是👇
    // [
    //     {Findex:A,list:[{a1},{a2},{a3}]}
    //     {Findex:b,list:[{b1},{b2},{b3}]}
    //   ]
    let obj = { hot: [] }
    // 按照首字母进行分组
    for (let index = 0; index < data.length; index++) {
        //先在所有数据中取出我们需要渲染的数据
        let { Findex, Fother_name, Fsinger_mid, Fsinger_name } = data[index]
        //头像图片路径的拼接
        let avator = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Fsinger_mid}.jpg?max_age=2592000`
        let singerItem = { Findex, Fother_name, Fsinger_mid, Fsinger_name, avator }

        // 将前10条数据加入到最热内部
        if (index < 10) {
            obj.hot.push(singerItem)
        }
        if (!obj[Findex]) {
            // 如果数组还没有此首字母的数据。 新建的首字母
            obj[Findex] = [singerItem]
        } else {
            // 如果对象中已存在此首字母的数据，向里添加歌手
            obj[Findex].push(singerItem)
        }
    }

    // 将对象转变为数组
    let hot = []
    let other = []
    for (const key in obj) {
        if (key === 'hot') {
            hot.push({ Findex: key, list: obj[key] })
            //因为元数据多了一条Findex=9的，我们直接将他去掉
        } else if (key != 9) {
            other.push({ Findex: key, list: obj[key] })
        }
    }
    //按照下标charCodeAt()方法进行字母从A-Z排序
    other.sort((a, b) => { return a.Findex.charCodeAt() - b.Findex.charCodeAt() })
    // 将最热和排序过的数据进行合并
    let result = hot.concat(other)
    return result
}
export { nomalData }