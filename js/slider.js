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
            this.autoPlay(3);
        },
        methods: {
            renderImage: function () {
                if (this.bird.index >= this.bird.images.length) this.bird.index = 0;
                else if (this.bird.index < 0) this.bird.index = this.bird.images.length - 1;
                this.bird.name = "Bird " + this.bird.images[this.bird.index];
                this.bird.src = "images/" + this.bird.images[this.bird.index] + ".jpg";
            },
            activeCircle: function (index) {
                if (index == this.bird.index) return "active";
            },
            nextImage: function () {
                this.bird.index++;
                this.autoplay = false;
                this.renderImage();
            },
            prevImage: function () {
                this.bird.index--;
                this.autoplay = false;
                this.renderImage();
            },
            autoImage: function () {
                this.bird.index++;
                this.renderImage();
            },
            goToImage: function (index) {
                this.bird.index = index;
                this.renderImage();
            },
            autoPlay: function (s) {
                const autoPlay = setInterval(() => {
                    if (!this.autoplay) {
                        clearInterval(autoPlay);
                        return;
                    }
                    this.autoImage();
                }, 1000 * s);
            }
        }
    }
);