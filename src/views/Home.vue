<template>
  <div class="home">
    <div class="header px-4 md:px-8 xl:px-36 py-16">
        <div class="logo">
            <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="lg:hidden menubar" @click="showmenu">
          <img src="@/assets/images/menu.png" alt="">
        </div>
        <div class="menu" :class="{'show': displayMenu}">
            <ul>
                <li><a @click="goto('about')" class="link">About</a></li>
                <li><a @click="goto('services')" class="link">Services</a></li>
                <li><a @click="goto('skills')" class="link">Skills</a></li>
                <li><a @click="goto('experience')" class="link">Experience</a></li>
                <li><a @click="goto('contact')" class="link">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="px-4 md:px-8 pt-8 pb-32 xl:px-40" ref="about">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-24">
        <div class="flex items-center lg:col-span-2" data-aos="fade-right">
            <div class="content">
              <h4 class="title mb-4">I'm <span class="name">Atharva Singh Rathod</span></h4>
              <div class="roles">
                <VueSlickCarousel v-bind="settings">
                  <div class="role">Enterpreneur</div>
                  <div class="role">Frontend Developer</div>
                  <div class="role">UI & UX Designer</div>
                </VueSlickCarousel>
              </div>
            </div>
        </div>
        <div class="lg:col-span-1" data-aos="fade-left">
          <div class="image">
            <div class="image--item" :style="{'background-image': 'url(' + require('@/assets/images/cover.jpg') + ')'}"></div>
          </div>
        </div>
        <div class="lg:col-span-2" data-aos="fade-right">
          <div class="icon">
            <img src="@/assets/images/instagram.png" alt="instagram">
          </div>
          <div class="icon">
            <img src="@/assets/images/linkedin.png" alt="instagram">
          </div>
          <div class="icon">
            <img src="@/assets/images/facebook.png" alt="instagram">
          </div>
          <div class="icon">
            <img src="@/assets/images/twitter.png" alt="instagram">
          </div>
          <div class="icon">
            <img src="@/assets/images/github.png" alt="instagram">
          </div>
        </div>
        <div class="lg:col-span-1" data-aos="fade-left">
          <div class="lg:text-right">
            <a href="mailto:atharvasinghrathod@gmail.com">atharvasinghrathod@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <section class="px-4 md:px-8 py-32 xl:px-36" ref="services">
      <h4 class="title mb-16"><span class="name">What I do?</span></h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div data-aos="fade-up">
          <img src="@/assets/images/vector.png" alt="" width="48">
          <h5 class="my-8 text-3xl font-medium">UI & UX Design</h5>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div data-aos="fade-up">
          <img src="@/assets/images/website.png" alt="" width="48">
          <h5 class="my-8 text-3xl font-medium">Website</h5>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div data-aos="fade-up">
          <img src="@/assets/images/mobile.png" alt="" width="48">
          <h5 class="my-8 text-3xl font-medium">Mobile Apps</h5>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
      </div>
    </section>
    <section class="py-32 px-4 md:px-8 xl:px-36" ref="skills">
      <h4 class="title mb-16"><span class="name">My Skills</span></h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-16">
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/html.png" alt="">
            </div>
            <div class="language">HTML 5</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/css.png" alt="">
            </div>
            <div class="language">CSS 3</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/js.png" alt="">
            </div>
            <div class="language">JavaScript</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/tailwind.png" alt="">
            </div>
            <div class="language">Tailwind CSS</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/vue.png" alt="">
            </div>
            <div class="language">Vue JS</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/swift.png" alt="">
            </div>
            <div class="language">Swift</div>
        </div>
      </div>
      <hr data-aos="fade-up">
      <div class="pt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/figma.png" alt="">
            </div>
            <div class="language">Figma</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/sketch.png" alt="">
            </div>
            <div class="language">Sketch</div>
        </div>
        <div class="flex items-center gap-4" data-aos="fade-up">
            <div class="skill">
              <img src="@/assets/images/principle.png" alt="">
            </div>
            <div class="language">Principle</div>
        </div>
      </div>
    </section>
    <section class="py-32 px-4 md:px-8 xl:px-36" ref="experience">
      <h4 class="title mb-16" data-aos="fade-up"><span class="name">My Experience</span></h4>
      <div class="exep" data-aos="fade-up">
        <h5 class="text-2xl pb-4">Lucid Design (April 2018 - Present)</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, facere soluta molestias adipisci voluptatum quod praesentium harum, esse possimus rem quia nobis consequuntur officiis eaque voluptates sapiente commodi. Placeat, distinctio.</p>
        <div class="py-16"><hr></div>
      </div>
      <div class="exep" data-aos="fade-up">
        <h5 class="text-2xl pb-4">One Design Company (December 2016 - April 2018)</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, facere soluta molestias adipisci voluptatum quod praesentium harum, esse possimus rem quia nobis consequuntur officiis eaque voluptates sapiente commodi. Placeat, distinctio.</p>
        <div class="py-16"><hr></div>
      </div>
      <div class="exep" data-aos="fade-up">
        <h5 class="text-2xl pb-4">Pixerio (May 2015 - December 2016)</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, facere soluta molestias adipisci voluptatum quod praesentium harum, esse possimus rem quia nobis consequuntur officiis eaque voluptates sapiente commodi. Placeat, distinctio.</p>
      </div>
    </section>
    <section ref="contact" class="px-4 md:px-8 xl:px-36 py-32">
      <div class="grid lg:grid-cols-2 gap-12">
        <div class="flex items-center" data-aos="fade-right">
          <div>
            <h4 class="title"><span class="name">Get in touch</span></h4>
            <p class="py-10 text-2xl">I'am always open to discuss on your project and talk about new things.</p>
            <div class="grid xl:grid-cols-2 gap-8">
              <div>
                <p class="mb-3 text-gray-500">Mail me at:</p>
                <p><a href="mailto:atharvasinghrathod@gmail.com">atharvasinghrathod@gmail.com</a></p>
              </div>
              <div>
                <p class="mb-3 text-gray-500">Follow me:</p>
                <div>
                  <div class="icon">
                    <img src="@/assets/images/instagram.png" alt="instagram">
                  </div>
                  <div class="icon">
                    <img src="@/assets/images/linkedin.png" alt="instagram">
                  </div>
                  <div class="icon">
                    <img src="@/assets/images/facebook.png" alt="instagram">
                  </div>
                  <div class="icon">
                    <img src="@/assets/images/twitter.png" alt="instagram">
                  </div>
                  <div class="icon">
                    <img src="@/assets/images/github.png" alt="instagram">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact" data-aos="fade-left">
          <form>
            <div>
              <input type="text" placeholder="Your name">
            </div>
            <div>
              <input type="email" placeholder="Your email">
            </div>
            <div>
              <textarea rows="4" placeholder="Your message"></textarea>
            </div>
            <button class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'Home',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      displayMenu: false,
      settings: {
          'dots': false,
          'arrows': false,
          'vertical': true,
          'fade': true,
          'autoplay': true,
          'autoplaySpeed': 3000
      }
    }
  },
  methods: {
      showmenu() {
        this.displayMenu = !this.displayMenu
      },
      goto(name) {
          window.scrollTo({top: this.$refs[name].offsetTop, behavior: 'smooth'});
          this.displayMenu = false;
      }
  },
}
</script>

<style lang="scss" scoped>
  .home {
    .header {
        background: #f8f8f8;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .logo {
            height: 48px;
            img {
                height: 100%;
            }
        }
        .menu {
            ul {
                li {
                    display: inline-block;
                    padding: 16px;
                    cursor: pointer;
                    a.link {
                      color: $color-2;
                      position: relative;
                      padding: 4px 0;
                      font-size: 18px;
                      &:before {
                          background: $color-2;
                          bottom: 0;
                          content: "";
                          height: 2px;
                          left: 0;
                          position: absolute;
                          transform: scaleX(0);
                          transition: transform .3s ease-in-out;
                          transform-origin: right;
                          width: 100%;
                      }
                      &:hover {
                          &:before {
                              transform: scaleX(1);
                              transform-origin: left;
                              transition-delay: .2s;
                          }
                      }
                    }
                }
            }
        }
    }
    @media(max-width: 768px) {
      .header {
        display: block;
        position: relative;
        .menubar {
          position: absolute;
          width: 40px;
          right: 1rem;
          top: 4rem;
        }
        .menu {
          margin-top: 40px;
          display: none;
          &.show {
            display: block;
            ul {
              li {
                display: block;
              }
            }
          }
        }
      }
    }
    .content {
      p.lead {
        font-size: 24px;
      }
      .roles {
        max-width: 300px;
        .role {
          font-size: 24px;
        }

      }
    }
    .image {
      position: relative;
      height: 400px;
      border-top-left-radius: 24px;
      border-bottom-right-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 28px 0 rgba(0,0,0,0.6);
      &--item {
        position: absolute;
        background-size: cover;
        inset: 0;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .icon {
      width: 20px;
      display: inline-block;
      margin-right: 24px;
      img {
        width: 100%;
      }
    }
    .skill {
      width: 64px;
      img {
        width: 100%;
      }
    }
    .language {
      font-size: 24px;
    }
    .contact {
      background: $color-2;
      padding: 40px;
      form {
        input[type="text"], input[type="email"] {
          background: transparent;
          width: 100%;
          padding: 8px 0;
          border-bottom: 1px solid $color-1;
          margin-bottom: 24px;
        }
        textarea {
          background: transparent;
          width: 100%;
          padding: 8px 0;
          border-bottom: 1px solid $color-1;
          resize: none;
          margin-bottom: 32px;
        }
      }
    }
    .btn {
      height: 40px;
      background: $color-1;
      color: $color-2;
      padding: 8px 24px;
    }
  }
</style>
