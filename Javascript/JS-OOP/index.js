// stopwatch
// duration
// reset
// start
// stop

function Stopwatch() {
    let startTime = 0;
    let endTime = 0;
    let running = false;
    let duration = 0;

    this.start = function () {
        if (running) {
            throw new Error("stopwatch has already started");
        }
        !running;
        startTime = new Date();
    };

    this.stop = function () {
        if (!running) {
            throw new Error("stopwatch is already stopped");
        }

        !running;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
    });
}

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    };
    this.draw = function () {
        computeOptimumLocation(0.1);
        console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("invalid location");
            }
            defaultLocation = value;
        },
    });
}

const circle = new Circle(10);
