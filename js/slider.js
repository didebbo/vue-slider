const root = new Vue(
    {
        el: "#slide",
        data: {
            autoplay: true,
            autoPlayCounter: 0,
            bird: {
                index: 0,
                images: ['01', '02', '03', '04', '05'],
                name: "Bird",
                src: "images/",
            }
        },
        mounted: function () {
            this.renderImage();
            this.autoPlay(2);
        },
        methods: {
            renderImage: function () {
                if (this.bird.index >= this.bird.images.length) this.bird.index = 0;
                else if (this.bird.index < 0) this.bird.index = this.bird.images.length - 1;
            },
            opt: function (index) {
                if (index == this.bird.index) return "opt-1";
            },
            activeCircle: function (index) {
                if (index == this.bird.index) return "active";
            },
            nextImage: function () {
                this.autoplay = false;
                this.bird.index++;
                this.renderImage();
            },
            prevImage: function () {
                this.autoplay = false;
                this.bird.index--;
                this.renderImage();
            },
            goToImage: function (index) {
                this.autoplay = false;
                this.bird.index = index;
                this.renderImage();
            },
            autoImage: function () {
                this.bird.index++;
                this.renderImage();
            },
            autoPlay: function (s) {
                const autoPlay = setInterval(() => {
                    if (!this.autoplay) {
                        this.restoreAutoPlay(10);
                        clearInterval(autoPlay);
                    }
                    else this.autoImage();
                }, 1000 * s);
            },
            restoreAutoPlay: function (t) {
                const restoreAutoPlay = setInterval(() => {
                    if (!this.autoplay) {
                        this.autoPlayCounter = 0;
                        this.autoplay = true;
                        clearInterval(restoreAutoPlay);
                        this.restoreAutoPlay(10);
                    }
                    else if (this.autoPlayCounter >= t) {
                        this.autoPlayCounter = 0;
                        this.autoPlay(2);
                        clearInterval(restoreAutoPlay);
                    }
                    this.autoPlayCounter++;
                }, 1000);
            }
        }
    }
);