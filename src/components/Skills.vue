<template>
    <div class="skills">
        <div class="row height-100">
            <div class="col-6">
                <div class="process">
                    <div class="heading">
                        <h3>Dream</h3>
                        <div class="underline2"></div>
                        <div class="entry-section">
                            <p>
                                At this stage research is made about the project, together with you we outline problems facing your business/projects.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="process">
                    <div class="heading">
                        <h3>Design</h3>
                        <div class="underline2"></div>
                        <div class="entry-section">
                            <p>
                                Outlined problems are examined to find the best solutions as well as the best strategy to implement crafted solution(s).
                            </p>
                        </div>
                    </div>
                </div>

                <div class="process">
                    <div class="heading">
                        <h3>Develop</h3>
                        <div class="underline2"></div>
                        <div class="entry-section">
                            <p>
                                Implement, Build, Test and Refine solutions into a final product that solves business problems.
                                <a href="mailto:promisefemi90@gmail.com" class="color-red">Contact me</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-6 place-flex-middle">
                <div class="skill-container">
                    <div class="skill-body">
                        <h3 class="top-heading">FRONT END</h3>

                        <div class="skill-holder">
                            <p class="sub-heading">HTML/CSS</p>
                            <div class="skill">
                                <div class="skill-inner gradient-straight" data-percent="90">
                                    <p class="skill-inner-percentage" data-percent="90">0%</p>
                                </div>
                            </div>
                        </div>

                        <div class="skill-holder">
                            <p class="sub-heading">Javascript</p>
                            <div class="skill">
                                <div class="skill-inner gradient-reverse" data-percent="85">
                                    <p class="skill-inner-percentage" data-percent="85">0%</p>
                                </div>
                            </div>
                        </div>

                        <div class="skill-holder">
                            <p class="sub-heading">Jquery</p>
                            <div class="skill">
                                <div class="skill-inner bg-red" data-percent="80">
                                    <p class="skill-inner-percentage" data-percent="80">0%</p>
                                </div>
                            </div>
                        </div>

                        <div class="skill-holder">
                            <p class="sub-heading">Vue JS</p>
                            <div class="skill">
                                <div class="skill-inner skill-width-85 bg-orange" data-percent="85">
                                    <p class="skill-inner-percentage" data-percent="85">0%</p>
                                </div>
                            </div>
                        </div>

                        <div class="skill-holder">
                            <p class="sub-heading">React JS</p>
                            <div class="skill">
                                <div class="skill-inner gradient-straight" data-percent="70">
                                    <p class="skill-inner-percentage" data-percent="70">0%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-body">
                        <h3 class="top-heading">BACK END</h3>

                        <div class="skill-holder">
                            <p class="sub-heading">PHP/Codeigniter</p>
                            <div class="skill">
                                <div class="skill-inner bg-red" data-percent="80">
                                    <p class="skill-inner-percentage" data-percent="80">0%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-body">
                        <h3 class="top-heading">MOBILE</h3>

                        <div class="skill-holder">
                            <p class="sub-heading">Cordova(Hybrid)</p>
                            <div class="skill">
                                <div class="skill-inner gradient-straight" data-percent="90">
                                    <p class="skill-inner-percentage" data-percent="90">0%</p>
                                </div>
                            </div>
                        </div>

                        <div class="skill-holder">
                            <p class="sub-heading">React Native</p>
                            <div class="skill">
                                <div class="skill-inner bg-orange" data-percent="40">
                                    <p class="skill-inner-percentage" data-percent="40">0%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {animJs} from "../assets/script/animations";
    import anime from 'animejs'

    export default {
        name: "Skills",
        data: () => ({}),
        mounted() {
            let timeline = anime.timeline({
                easing: 'spring',
            })

            timeline.add({
                targets:".skill-inner-percentage",
                innerHTML: [0, function (el, i) {
                    return parseInt(el.getAttribute('data-percent'), 10)
                }],
                round: 10,
                duration: 2000,
                delay: anime.stagger(100, {start: 200, easing: 'easeOutQuad'}),
                easing: 'spring',
            })
            timeline.add({
                targets: ".skill-inner",
                width: [0, function (el, i) {
                    return parseInt(el.getAttribute('data-percent'), 10)+"%";
                }],
                delay: anime.stagger(200)
            },100)

            let hello={
                easing:"spring",
                translateY:[100,0],
                opacity:[0,1],
                direction: "linear",
                delay: anime.stagger(200),
                duration: 2000
            }
            animJs('.process', hello);
        }
    };
</script>
<style scoped src="../assets/styles/skills.css">
</style>
