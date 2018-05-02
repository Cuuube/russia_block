interface IPoint {
    x: number,
    y: number,
    plus(point: IPoint): IPoint,
    minus(point: IPoint): IPoint,
}

class Point implements IPoint {
    constructor (
        public x: number,
        public y: number,
    ) { }

    plus (point: IPoint): IPoint {
        return new Point(
            point.x + this.x,
            point.y + this.y
        );
    }

    minus (point: IPoint): IPoint {
        return new Point(
            point.x - this.x,
            point.y - this.y
        );
    }

}

var pnt = (x: number, y: number) => new Point(x, y);