// 田字形方块
class OBlock extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    // 生成所有点到points中
    private init (): void {
        let point = this.center;
        this.body.push(pnt(0, 0));
        this.body.push(pnt(-1, 0));
        this.body.push(pnt(0, -1));
        this.body.push(pnt(-1, -1));
    }
    // 旋转 do nothing
    tilt (): void { }
}

// 右L型方块
class Lblock extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(0, -1));
        this.body.push(pnt(+1, -1));
    }
}

// 左L型方块
class LBlockLeft extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(0, -1));
        this.body.push(pnt(-1, -1));
    }
}

// I型方块
class IBlock extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(0, -1));
        this.body.push(pnt(0, -2));
    }
}

// 左拐型方块
class BlockLeft extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(+1, 0));
        this.body.push(pnt(+1, -1));
    }
}

// 右拐型方块
class BlockRight extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(-1, 0));
        this.body.push(pnt(-1, -1));
    }
}

// T型方块
class TBlock extends BuildingBlock {
    constructor (centerPoint: IPoint) {
        super(centerPoint);
        
        this.init();
    }
    init (): void {
        let point = this.center;
        this.body.push(pnt(0, +1));
        this.body.push(pnt(0, 0));
        this.body.push(pnt(-1, 0));
        this.body.push(pnt(+1, 0));
    }
}