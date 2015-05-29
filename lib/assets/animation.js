var Animation = function(width, height, ctx, image, totalFrames, fps) {

    this.isPlaying = true;
    this.currentFrame = 0;
    this.currentRenderedFrame = 0;
    this.ctx = ctx;
    this.image = image;
    this.totalFrames = totalFrames;
    this.width = width;
    this.height = height;
    this.fps = fps;

    this.render = function() {

        if(!this.isPlaying) {
            if(this.currentFrame != this.currentRenderedFrame) {
                this.currentRenderedFrame = this.currentFrame;

                this.ctx.clearRect(0, 0, this.width, this.height);
                this.ctx.drawImage(this.image, 0, this.height * this.currentRenderedFrame, this.width, this.height, 0, 0, this.width, this.height);
            }
            return;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.image, 0, this.height * this.currentRenderedFrame, this.width, this.height, 0, 0, this.width, this.height);

        this.currentRenderedFrame++;

        if(this.currentRenderedFrame >= this.totalFrames) {
            this.currentRenderedFrame = 0;
        }

        this.currentFrame = this.currentRenderedFrame;
    };

    this.nextFrame = function() {
        this.currentFrame++;

        if(this.currentFrame >= this.totalFrames) {
            this.currentFrame = 0;
        }
    }

    this.prevFrame = function() {
        this.currentFrame--;

        if(this.currentFrame < 0) {
            this.currentFrame = this.totalFrames - 1;
        }
    }

    this.pause = function() {
        this.isPlaying = false;
    }

    this.play = function() {
        this.isPlaying = true;
    }

    this.start = function() {
        this.render();
        var t = this;

        setInterval(function() {
            t.render();
        }, fps);
    }
}