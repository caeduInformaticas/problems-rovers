var { KEY } = require("../const");
var { COMMAND } = require("../const");

class Navigate {
    mMove = new Map();
    mStoragePoints = [];
    mStorageMoves = [];
    constructor(key, x = 0, y = 0, psX=3,psY=3) {
        this.mPointTopRight = [psX,psY];
        this.key = key;
        this.mCurrentCardinalDir = key;
        this.mNextCardinalDir = key;
        this.currentOrientation = null;
        this.nextOrientation = null;
        this.x = x;
        this.y = y;
        this.initialize();
    }
    verifyXOnPlateau() {
        return this.x < this.mPointTopRight[0]+1;
    }
    verifyYOnPlateau() {
        return this.y < this.mPointTopRight[1]+1;
    }
    lessXaxis = () => {
        this.x -= 1;
    }
    addXaxis = () => {
        this.x += 1;
    }
    addYaxis = () => {
        this.y += 1;
    }
    lessYaxis = () => {
        this.y -= 1;
    }
    initialize() {
        //this.mMove.set(KEY.NORTH,[LEFT,RIGHT]) // 90 grados;
        this.mMove.set(KEY.NORTH, [this.lessXaxis, this.addXaxis, KEY.WEST, KEY.EAST, this.addYaxis]);
        this.mMove.set(KEY.EAST, [this.addYaxis, this.lessYaxis, KEY.NORTH, KEY.SUDTH, this.addXaxis]);
        this.mMove.set(KEY.SUDTH, [this.addXaxis, this.lessXaxis, KEY.EAST, KEY.WEST, this.lessYaxis]);
        this.mMove.set(KEY.WEST, [this.lessYaxis, this.addYaxis, KEY.SUDTH, KEY.NORTH, this.lessXaxis]);
    }
    _move() {
        try {
            if (this.mCurrentCardinalDir === this.mNextCardinalDir) {
                this.mMove.get(this.mCurrentCardinalDir)[4]();
            } else if (this.currentOrientation === COMMAND.LEFT) {
                this.mMove.get(this.mCurrentCardinalDir)[0]();
            } else if (this.currentOrientation === COMMAND.RIGHT) {
                this.mMove.get(this.mCurrentCardinalDir)[1]();
            }
            if (!this.verifyYOnPlateau()) {
                const text = `Point - Y axis is Out ${this._buildOutput()}`;
                throw new Error(text);
            }
            if (!this.verifyXOnPlateau()) {
                const text = `Point - X axis is Out ${this._buildOutput()}`;
                throw new Error(text);
            }
        } catch (error) {
            throw new Error(text);
        }
    }
    _updateorientation(cmd, i) {
        if (i >= 1) {
            if (this.mStorageMoves[i] === this.mStorageMoves[i-1]) {
                this._updatemCurrentCardinalDir();
            }
        }
        this.currentOrientation = cmd;
        if (cmd === COMMAND.LEFT) {
            this.mNextCardinalDir = this.mMove.get(this.mCurrentCardinalDir)[2];
        } else {
            this.mNextCardinalDir = this.mMove.get(this.mCurrentCardinalDir)[3];
        }
    }
    _updatemCurrentCardinalDir() {
        this.mCurrentCardinalDir = this.mNextCardinalDir;
    }
    _getCoorPoints() {
        return this.mStoragePoints;
    }
    _storagePoints() {
        this.mStoragePoints.push([this.x, this.y]);
    }
    _storageMoves(move) {
        this.mStorageMoves.push(move);
    }
    _getCurrentCardinalPoint() {
        return this.mCurrentCardinalDir;
    }
    _getCoorPoint() {
        return [this.x, this.y];
    }
    _buildOutput() {
        return `${this.x} ${this.y} ${this.mCurrentCardinalDir}`;
    }

}

module.exports = Navigate;