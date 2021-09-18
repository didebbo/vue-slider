const root = new Vue(
    {
        el: "#slider",
        data: {
            autoplay: true,
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
                window.location.href = "#" + this.bird.index;
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
                        clearInterval(autoPlay);
                        this.restoreAutoPlay(10);
                    }
                    else this.autoImage();
                }, 1000 * s);
            },
            restoreAutoPlay: function (t) {
                setTimeout(() => {
                    this.autoplay = true;
                    this.autoPlay(2);
                }, 1000 * t);
            }
        }
    }
);