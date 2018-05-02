// interface IBlock {
//     center: IPoint;
//     body: IPoint[];
//     tilt(): void;
// }

abstract class BuildingBlock {
    public body: IPoint[] = [];
    private preStatus: { body: IPoint[], center: IPoint };
    constructor (
        public center: IPoint,
    ) { }

    tilt (): void {
        this.setPre();
        this.body = this.body.map((point: IPoint) => {
            let relativePoint = point.minus(this.center);
            return pnt(relativePoint.y, -relativePoint.x).plus(this.center);
        })
    }

    private setPre (): void {
        this.preStatus = {
            body: this.body,
            center: this.center
        }
    }

    backup (): void {
        this.body = this.preStatus.body;
        this.center = this.preStatus.center;
    }

    centerDown () {
        this.setPre();
        this.center = this.center.plus(pnt(0, -1));
    }

    centerLeft (): void {
        this.setPre();
        this.center = this.center.plus(pnt(-1, 0));
    }

    centerRight (): void {
        this.setPre();
        this.center = this.center.plus(pnt(1, 0));
    }
}