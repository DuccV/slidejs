((factory, global) => {
    factory(global)
})(() => {
    /** 
    */
    const slidejs = {}
    slidejs.version = '1.0.0.0'



    class Slide {
        constructor(options = { count: Number, type, rootElement }) {
            this.count = options.count || 10
            this.type = type || this.SlideType.AnimationSlide
            this.rootElement = this.rootElement
        }

        render() {

        }

        appendSlide(...slide) {

        }
    }

    slidejs.SlideType = {
        AnimationSlide: {
            type: 'AnimationSlide'
        }
    }

    typeof module !== 'undefined' ? () => {
        module.exports.slidejs = slidejs;
        module.exports.Slide = Slide
        module.exports.SlideType = SlideType

    } : () => {
        global.slidejs = slidejs
        global.Slide = Slide
        global.SlideType = SlideType
    }
}, this)