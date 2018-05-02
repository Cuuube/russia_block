interface IConfig {
    width?: number,
    height?: number
}

class Core {
    public width: number;
    public height: number;
    public originPoint: IPoint;
    public BlockList: BuildingBlock[] = [];

    private currentBlock: IBlock | null = null;
    private dataset: Dataset;


    constructor (config: IConfig) {
        this.width = config.width || Config.WIDTH;
        this.height = config.height || Config.HEIGHT;

        this.originPoint = pnt(Math.round(this.width/2), this.height);

        this.dataset = new Dataset(this.width, this.height);
    }

    onstart () { }
    onend () { }
    onrender () { }

    start () {
        this.onrender();
        if (this.currentBlock) {
            this.currentBlock.centerDown();
        } else {
            this.createBlock();
        }
        // check gameover
        setTimeout(() => this.start(), 1000);
    }

    getOne (list: any[]) {
        let length = list.length;
        return list[Math.floor(length * Math.random())];
    }

    createBlock () {
        this.currentBlock = new (this.getOne(this.BlockList))(this.originPoint);
        console.log('create!');
    }

    blockLeft () {
        if (this.currentBlock) {
            this.currentBlock.centerLeft();
            if (!this.checkBlockCan()) {
                this.currentBlock.backup();
            }
        }
        
    }

    blockRight () {
        if (this.currentBlock) {
            this.currentBlock.centerRight();
            if (!this.checkBlockCan()) {
                this.currentBlock.backup();
            }
        }
        
    }

    blockTilt () {
        if (this.currentBlock) {
            this.currentBlock.tilt();
            if (!this.checkBlockCan()) {
                this.currentBlock.backup();
            }
        }
        
    }

    blockdrop () {
        if (this.currentBlock) {
            this.currentBlock.centerDown();
            if (!this.checkBlockCan()) {
                this.dataset.writePoint(this.currentBlock);
                this.currentBlock = null;
            }
        }
        
    }

    private checkBlockCan () {
        let currentBlock = this.currentBlock;
        if (currentBlock) {
            currentBlock.body.forEach((point: IPoint) => {
                let realPoint = point.plus(currentBlock.center);
                if (!this.dataset.check(realPoint)) {
                    return false;
                }
            })
            return true;
        } else {
            return false;
        }
        
    }
}

class Dataset {
    private data: Int8Array[] = [];
    constructor (private width: number, private height: number) {
        this.reset();
    }

    writePoint (block: BuildingBlock): void {
        block.body.forEach((point: IPoint) => {
            let realPoint = point.plus(block.center);
            this.data[realPoint.y][realPoint.x] = 1;
        })
    }

    reset (): void {
        this.data = new Array(this.height);
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = new Int8Array(this.width);
        }
    }

    export (): Int8Array[] {
        return this.data;
    }

    check (point: IPoint): boolean {
        if (!!this.data[point.y][point.x]) {
            return true;
        } else {
            return false;
        }
    }
}