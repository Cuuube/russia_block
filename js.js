class Page {
    constructor (config) {
        this.config = config;
        this.canvas = new Canvas(config);
    }
    init () {

    }
}



// canvas类，控制渲染
class Canvas {
    constructor (config) {
        let canvas = document.createElement('canvas');
        canvas.id = config.id;
        this.width = canvas.width = config.width;
        this.height = canvas.height = config.height;
        document.body.appendChild(canvas);

        this.ctx = canvas.getContext('2d');

        this.data = new Database(config);
        this.ele = canvas;
    }
    // 把数据画到画板上
    render (data) {

    }
    // 清除画布
    clear () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    // 画单个方块
    drawBlock () {
        
    }

}

// 放方块资料的地方
class Database {
    constructor (config) {
        this.active = '';
        this.isPause = false;
        this.BlockList = config.BlockList;
        this.speed = config.speed;

        this.originPoint = new Point(Math.round(config.width/2),config.height);
        this.run();
        this.stopId = null;
    }
    // 随机取出元素
    getOne (list) {
        let length = list.length;
        return list[Math.floor(length * Math.random())];
    }
    // 生产积木
    create () {
        this.active = new (this.getOne(this.BlockList))(this.originPoint);
        console.log('create!');
    }
    // 下落
    drop () {
        console.log(this.active.toArray())
        console.log('drop!');
    }
    // 监测接触底边
    judgeIsEnd () {
        
    }
    // 监测消行
    judgeIsClear () {
        
    }
    // 监测游戏结束
    judgeIsGameOver () {
        
    }
    // 开始
    run () {
        let self = this;
        this.stopId = setInterval(() => {
            if (self.active == false) {
                self.create();
                
            } else {
                self.drop();
            }
        }, self.speed);
    }
}

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    toArray () {
        return [this.x, this.y];
    }
}

class Points extends Array{
    // constructor (arr) {
    //     this.points = arr;
    // }
    // push (point) {
    //     this.points.push(point);
    //     return this;
    // }
    // toArray () {
    //     return this.points.map((val) => [val.x, val.y]);
    // }
}

class BuildingBlocks {
    constructor () {
        this.isTilt = false;
        this.points = null;
    }
    // 旋转
    tilt () {
        
    }
    getPoints() {
        return this.points;
    }
}

// 田字形方块
class OBlock extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    // 生成所有点到points中
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0))
              .push(new Point(x0 - 1, y0))
              .push(new Point(x0, y0 - 1))
              .push(new Point(x0 - 1, y0 - 1));
        return points;
    }
    // 旋转
    tilt () {
        return this;
    }
}

// 右L型方块
class Lblock extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0, y0 - 1))
              .push(new Point(x0 + 1, y0 - 1));
        return points;
    }
}

// 左L型方块
class LBlockLeft extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0, y0 - 1))
              .push(new Point(x0 - 1, y0 - 1));
        return points;
    }
}

// I型方块
class IBlock extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0, y0 - 1))
              .push(new Point(x0, y0 - 2));
        return points;
    }
}

// 左拐型方块
class BlockLeft extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0 + 1, y0))
              .push(new Point(x0 + 1, y0 - 1));
        return points;
    }
}

// 右拐型方块
class BlockRight extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0 - 1, y0))
              .push(new Point(x0 - 1, y0 - 1));
        return points;
    }
}

// T型方块
class TBlock extends BuildingBlocks{
    constructor (point) {
        super();
        this.center = point;
        this.points = this.createPoints(point);
    }
    createPoints (point) {
        let x0 = point.x;
        let y0 = point.y;
        let points = new Points();
        points.push(new Point(x0, y0 + 1))
              .push(new Point(x0, y0))
              .push(new Point(x0 - 1, y0))
              .push(new Point(x0 + 1, y0));
        return points;
    }
}











new Page({
    width: 300,
    height: 600,
    speed: 1000,
    BlockList: [
        OBlock,
        Lblock,
        LBlockLeft,
        IBlock,
        BlockLeft,
        BlockRight,
        TBlock,
    ],
}).init();