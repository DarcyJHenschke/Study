// stopwatch
// duration
// reset
// start
// stop

function Stopwatch() {
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this.duration = 0;

    Object.defineProperty(this, "duration", {
        get: function () {
            return this.duration;
        },
    });
}

Stopwatch.prototype.start = function () {
    if (this.running) {
        throw new Error("stopwatch has already started");
    }
    !this.running;
    this.startTime = new Date().getTime();
};
Stopwatch.prototype.stop = function () {
    if (!this.running) {
        throw new Error("stopwatch is already stopped");
    }

    !this.running;
    this.endTime = new Date();
    const seconds = (this.endTime - this.startTime) / 1000;
    duration += seconds;
};
Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};
