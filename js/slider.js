const root = new Vue(
    {
        el: "#slider",
        data: {
            bird: {
                index: 0,
                images: ['01', '02', '03', '04', '05'],
                name: "Bird",
                src: "images/",
            }
        },
        mounted: function () {
            this.bird.name += " " + this.bird.images[this.bird.index];
            this.bird.src += this.bird.images[this.bird.index] + ".jpg";
        },
        methods: {
            activeCircle: function (index) {
                if (index == this.bird.index) return "active";
            },
            renderImage: function () {
                if (this.bird.index >= this.bird.images.length) this.bird.index = 0;
                else if (this.bird.index < 0) this.bird.index = this.bird.images.length - 1;
                this.bird.name = "Bird " + this.bird.images[this.bird.index];
                this.bird.src = "images/" + this.bird.images[this.bird.index] + ".jpg";
            },
            nextImage: function () {
                this.bird.index++;
                this.renderImage();
            },
            prevImage: function () {
                this.bird.index--;
                this.renderImage();
            }
        }
    }
);