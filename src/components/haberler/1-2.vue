<template>
  <div>
    <!--Wrapper Start-->
    <div class="wrapper">
      <!--Header Start-->
      <Header />
      <!--Header End-->

      <section
        id="baslik"
        class="wf100 subheader"
        style="background-image:url(../../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005152448130.jpg) no-repeat;background-size:cover; "
      >
        <div class="container">
          <h2>Haberler</h2>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li>Haberler</li>
          </ul>
        </div>
      </section>

      <div class="main-content p80">
        <div class="news-details">
          <div class="container">
            <div class="row">
              <div
                class="col-md-9"
                style=" padding:30px; box-shadow:0px 5px 10px 0 rgba(0,0,0,.07);"
              >
                <div class="news-wrapper news-grid">
                  <div class="row">
                    <div class="col-md-4 acilirkutu col-sm-6">
                      <div
                        class="news-box"
                        style="height:430px; overflow:hidden;"
                      >
                        <div>
                          <img
                            style="height:300px; width:100%;object-fit:cover;"
                            src="../../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/160/20201005152026244.jpg"
                            alt="mobil-uygulamamiz-yayinda"
                          />
                        </div>
                        <div class="new-txt">
                          <ul class="news-meta">
                            <li>26 Ağu, 2019</li>
                          </ul>
                          <h6>
                            <a href="mobil-uygulamamiz-yayinda-160.html"
                              >Mobil Uygulamamız Yayında.</a
                            >
                          </h6>
                          <p>Mobil Uygulamamız Yayında.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 acilirkutu col-sm-6">
                      <div
                        class="news-box"
                        style="height:430px; overflow:hidden;"
                      >
                        <div>
                          <img
                            style="height:300px; width:100%;object-fit:cover;"
                            src="../../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/159/20201005152051275.jpg"
                            alt="turistler-ilcemizi-artik-daha-cok-seviyor"
                          />
                        </div>
                        <div class="new-txt">
                          <ul class="news-meta">
                            <li>26 Ağu, 2019</li>
                          </ul>
                          <h6>
                            <a
                              href="turistler-ilcemizi-artik-daha-cok-seviyor-159.html"
                              >Turistler ilçemizi artık daha çok seviyor.</a
                            >
                          </h6>
                          <p>Turistler ilçemizi artık daha çok seviyor.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 acilirkutu col-sm-6">
                      <div
                        class="news-box"
                        style="height:430px; overflow:hidden;"
                      >
                        <div>
                          <img
                            style="height:300px; width:100%;object-fit:cover;"
                            src="../../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/21/20201005152119228.jpg"
                            alt="belediye-kultur-evi-hizmete-girdi"
                          />
                        </div>
                        <div class="new-txt">
                          <ul class="news-meta">
                            <li>31 Tem, 2019</li>
                          </ul>
                          <h6>
                            <a href="belediye-kultur-evi-hizmete-girdi-21.html"
                              >Belediye Kültür Evi Hizmete Girdi !</a
                            >
                          </h6>
                          <p>Belediye Kültür Evi Hizmete Girdi !</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 acilirkutu col-sm-6">
                      <div
                        class="news-box"
                        style="height:430px; overflow:hidden;"
                      >
                        <div>
                          <img
                            style="height:300px; width:100%;object-fit:cover;"
                            src="../../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/16/20201005152215945.jpg"
                            alt="belediye-otoparkimiz-hizmete-girdi"
                          />
                        </div>
                        <div class="new-txt">
                          <ul class="news-meta">
                            <li>31 Tem, 2019</li>
                          </ul>
                          <h6>
                            <a href="belediye-otoparkimiz-hizmete-girdi-16.html"
                              >Belediye Otoparkımız Hizmete Girdi !</a
                            >
                          </h6>
                          <p>Belediye Otoparkımız Hizmete Girdi !</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 acilirkutu col-sm-6">
                      <div
                        class="news-box"
                        style="height:430px; overflow:hidden;"
                      >
                        <div>
                          <img
                            style="height:300px; width:100%;object-fit:cover;"
                            src="../../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/15/20201005152238054.jpg"
                            alt="robotik-kodlama-dersleri-basliyor"
                          />
                        </div>
                        <div class="new-txt">
                          <ul class="news-meta">
                            <li>31 Tem, 2019</li>
                          </ul>
                          <h6>
                            <a href="robotik-kodlama-dersleri-basliyor-15.html"
                              >Robotik Kodlama Dersleri Başlıyor !</a
                            >
                          </h6>
                          <p>Robotik Kodlama Dersleri Başlıyor !</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row listele">
                    <router-link tag="a" to="/haberler/1-2" class="sayfanumarasi">1</router-link>
                  </div>
                </div>
              </div>
              <Hizlimenu/>
            </div>
          </div>
        </div>
      </div>

      <!--Footer Start-->

      <Footer />
      <!--Footer End-->
    </div>
    <!--Wrapper End-->

    <Nav />
    <div class="overlay"></div>
  </div>
</template>
<script>
import Header from "../Anasayfa/Header";
import Nav from "../Anasayfa/Nav";
import Footer from "../Anasayfa/Footer";
import Hizlimenu from "../Anasayfa/Hizlimenu";
import $ from "jquery";

export default {
  components: {
    Header,
    Nav,
    Footer,
    Hizlimenu
  },
  mounted() {
    $(".acilirkutu").mouseover(function() {
      $(".team-txt", this).attr(
        "style",
        "transition:all 0.6s;margin-top:-300px;"
      );
      $(".hed-div", this).attr(
        "style",
        "transition:all 0.6s;margin-top:-300px;"
      );
      $(".new-txt", this).attr(
        "style",
        "transition:all 0.6s;margin-top:-300px;"
      );
    });
    $(".acilirkutu").mouseleave(function() {
      $(".team-txt", this).attr("style", "transition:all 0.6s;margin-top:0px;");
      $(".hed-div", this).attr("style", "transition:all 0.6s;margin-top:0px;");
      $(".new-txt", this).attr("style", "transition:all 0.6s;margin-top:0px;");
    });
    $(".kutu").mouseover(function() {
      $(".team-txt", this).attr(
        "style",
        "transition:all 0.6s;margin-top:-200px;opacity:0.6; padding-top:90px;"
      );
      $(".team-txt h5", this).attr(
        "style",
        "transition:all 0.6s;color:#ff7200;"
      );
    });
    $(".kutu").mouseleave(function() {
      $(".team-txt", this).attr(
        "style",
        "transition:all 0.6s;margin-top:-50px;opacity:1; background:#ff720087;"
      );
      $(".team-txt h5", this).attr("style", "transition:all 0.6s;color:white;");
    });
  },
};
</script>
<style scoped>
.resimslyt {
  background: #b1b1b1 !important;
}
.resimslyt img {
  object-fit: contain !important;
}
.resimhov img {
  object-fit: contain !important;
  height: auto !important;
  width: 194px !important;
  margin-right: 10px;
  margin-top: 10px;
  background: #b1b1b1 !important;
  box-shadow: 0px 0px 12px 1px #8888884f;
}
.resimhov :hover {
  transform: scale(2.3);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
header .container {
  text-align: center;
}

.logo {
  margin: 10px 20px;
  width: 150px;
}

.h3-navbar {
  box-shadow: 2px 1px 20px 0px rgba(0, 0, 0, 0.4);
}

.team-txt,
.hed-div,
.new-txt {
  position: sticky;
  background: white;
  height: 100%;
}

.h3-logo-row {
  background: url(../images/img.png);
}

.ortala {
  width: 100%;
  text-align: center;
}

.ortala li {
  text-align: center;
  width: 14%;
}

::-webkit-scrollbar {
  display: none;
}

.listele {
  text-align: center;
}

.sayfanumarasi {
  font-weight: bold;
  padding: 0 20px;
  font-size: 20px;
  color: black;
}

.instagramul {
  background: White;
  padding: 10px;
}

.instagramul li {
  list-style: none;
}

.instagramul img {
  width: 100%;
}

.instagramul h4 {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.slick-prev,
.slick-next {
  background: #ff7200;
  height: 130px;
  color: white;
  border: none;
  font-weight: bolder;
  font-size: 30px;
  position: absolute;
  width: 40px;
  top: 40%;
  opacity: 0.6;
  z-index: 50;
}

.slick-prev:hover,
.slick-next:hover {
  opacity: 1;
}

.gosterslayt .slick-next {
  left: calc(100% - 40px);
}

#ploader {
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: #e5eff1;
}

#ploader img {
  position: absolute;
  top: calc(50vh - 50px);
  left: calc(50vw - 50px);
  width: 100px;
  height: 100px;
}
.lightbox-gallery {
  color: #000;
  overflow-x: hidden;
}

.lightbox-gallery p {
  color: #fff;
}

.lightbox-gallery h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #000000;
}

.lightbox-gallery .intro {
  font-size: 16px;
}

.lightbox-gallery .intro p {
  margin-bottom: 0;
}

.lightbox-gallery .photos {
  padding-bottom: 20px;
}

.lightbox-gallery .item {
  padding-bottom: 30px;
}
.slick-prev,
.slick-next,
.city-tour strong,
ul.reports,
.h3-navbar .donate-btn a:hover,
.wrap-404 a.back,
.wrap-404 button.btn,
.main-slider .owl-carousel button.owl-dot span:hover,
.main-slider .owl-carousel button.owl-dot.active span,
.banner-tags li:hover,
.header .topbar,
.city-highlights .owl-carousel .owl-nav button.owl-next:hover,
.city-highlights .owl-carousel .owl-nav button.owl-prev:hover,
.sub-menu a:hover,
.logo-nav-row .dropdown-menu > li > a:hover,
.slider-caption a:hover,
.Mayor-text a:hover,
.title-style-2 a:hover,
.city-highlights .owl-carousel .owl-nav button.owl- next:hover,
.city-highlights .owl-carousel .owl-nav button.owl-prev:hover,
.emergency-info,
.stay-connected input[type="submit"],
.h2-Mayor-msg .Mayor-txt a:hover,
.team-heading a:hover,
.h3-slider-caption a:hover,
.news-details blockquote,
.single-post-tags a:hover,
.post-comments-form input[type="submit"],
.deprt-icon-box a.rm:hover,
a.jobs-link:hover,
.community-links-style-two li a img,
.widget .upcoming-events li:hover .edate,
.contact-team,
.newsletter-style2 button,
.post-comments-form input[type="submit"],
.service-page-bottom .newsletter-form button,
.city-updates li.more-news a:hover,
.department-links li a,
.contact-form input[type="submit"],
.event-date-share .edate,
.event-gallery .eg-thumb a:hover,
a.dbutton,
.dn-btn,
.single-donation-box .progress .progress-bar,
li.form-submit button,
.donator-details input[type="submit"],
.login-box input[type="submit"],
.login-account,
.register-account input[type="submit"],
.home3.emergency-numbers .newsletter-form button {
  background-color: #ff7200;
}

.sub-menu a,
.logo-nav-row .dropdown-menu > li > a,
.e-numbers .info-num h3,
.community-box h6,
.twitter-widget a.reply-tw:hover,
ul.post-time a i,
.add-box i,
.event-counter a,
.event-content ul.emeta li strong,
.event-gallery .eg-thumb a,
.campaign-thumb a,
ul.participants li strong i {
  color: #ff7200;
}

.event-post:hover .event-post-loc a,
.event-share ul a.like,
#haberbaskan .col-md-8,
.h3-logo-row ul.quick-links li a:hover,
#search .btn,
#search .close,
.slider-caption a,
.Mayor-msg,
.title-style-2 a,
.latest-updates h6,
.latest-updates ul li:after,
.new-thumb a:hover,
.thumb a:hover,
.ch-box .ch-thumb a:hover,
.city-highlights .owl-carousel .owl-nav button.owl-next,
.city-highlights .owl-carousel .owl-nav button.owl-prev,
.stay-connected,
.e-numbers .em-box:hover,
span.ecat,
.highlights-cityscapes .owl-carousel .owl-nav button.owl- prev,
.highlights-cityscapes .owl-carousel .owl-nav button.owl-next,
.highlights-cityscapes .owl-carousel .owl-nav button.owl- prev:hover,
.highlights-cityscapes .owl-carousel .owl-nav button.owl-next:hover,
.community-box a.see-more:hover,
.team-heading a,
.home3.footer,
.become-vol,
.cross-btn:hover,
.h3-navbar .donate-btn a,
.h3-slider-caption a,
.title-style-3 p:before,
.news-box-f:after,
.news-box:hover .news-box-f a,
.deprt-icon-box a.rm,
a.jobs-link,
.recent-events .nav-tabs > li > a,
.recent-events .nav-tabs > li > a:after,
.recent-events .event-list:after,
.event-list a.joinnow:hover,
.recent-events .event-list:hover a.joinnow,
.community-links-style-two li a:hover img,
#h3team-slider .owl-next:hover,
#h3team-slider .owl- prev:hover,
.event-list-box:hover a.join-now,
.widget .upcoming-events .edate,
.tags-widget a:hover,
.contact-team:hover,
.post-comments-form input[type="submit"]:hover,
.city-updates li.more-news a,
.department-links li a.c9,
.gallery-thumb a:hover,
.contact-form input[type="submit"]:hover,
.event-counter a:hover,
.event-share ul a:hover,
.campaign-thumb a:hover,
.campaign-box:hover a.dbutton,
.causes-listing .campaign-box:hover .dn-btn,
.single-donation-box
  .radio-boxes
  input[type="radio"].css-
  radio
  + label.css-label:hover,
.single-donation-box
  .radio-
  boxes
  input[type="radio"].css-radio:checked
  + label.css-label,
.radio-boxes input[type="radio"].css-radio + label.css-label:hover,
.radio-boxes input[type="radio"].css-radio:checked + label.css-label,
li.form-submit button:hover,
.donator-details input[type="submit"]:hover,
.testimonials-section .owl-theme .owl-dots .owl-dot.active span,
.testimonials-section .owl-theme .owl-dots .owl-dot span:hover,
.login-account input[type="submit"],
.register-account input[type="submit"]:hover,
.cs-newsletter-form button.subscribe,
ul.team-social:after,
.call2action a,
.h2-Mayor-msg,
.newsletter-form button,
.community-box a.see-more:hover,
.community-box:hover a.see-more,
.ecat.c1,
.site-pagination .pagination > .active > a,
.site-pagination .pagination > .active > a:focus,
.site-pagination .pagination > .active > a:hover,
.site-pagination .pagination > .active > span,
.site-pagination .pagination > .active > span:focus,
.site-pagination .pagination > .active > span:hover,
.site-pagination .pagination > li > a:focus,
.site-pagination .pagination > li > a:hover,
.site-pagination .pagination > li > span:focus,
.site-pagination .pagination > li > span:hover,
.serbox-cap .rm:hover {
  background-color: #1e4a6c;
}

.lb-ser-box li:hover h6,
.footer-social a:hover,
.some-facts ul li:hover strong,
.team-box .team-txt strong,
.team-box:hover .team-txt h5,
ul.check-list i,
.local-box:hover a,
.event-post-full:hover .event-post-loc a,
.event-post-full:hover .event-post-txt h5 a,
.news-post:hover .news-post-txt h5 a,
.logo-nav-row ul.nav.navbar-nav.navbar-right .search-btn a,
.logo-nav-row ul.nav.navbar-nav.navbar-right .bars-btn a,
.logo-nav-row .nav .open > a,
.logo-nav-row .nav .open > a:focus,
.logo-nav-row .nav .open > a:hover,
.logo-nav-row .navbar-nav > li > a:hover,
.about-widget a:hover,
.widget .recent-posts strong,
.widget .recent-posts h6 a:hover,
.button-group .button:hover,
.button-group .button:active,
.button-group .button.is-checked,
.local-service-box:hover a,
.latest-updates ul li strong a:hover,
.event-post:hover .event-post-loc a,
.event-post:hover h5 a,
.new-thumb a,
.thumb a,
.ch-box .ch-thumb a,
.ch-box .ch-txt ul li a:hover,
.ch-box .ch-txt ul li:after,
.ch-box .ch-txt h5 a:hover,
.query ul li strong,
.fact-box strong,
.e-numbers .info-num strong,
.e-numbers .em-box strong.em-num,
.btn-group.share-post button.dropdown-toggle:hover,
.news-meta .post-user,
.hc-box .hc-box-cap li:after,
.hc-box:hover .hc-box-cap h5 a,
.hc-box:hover .hc-box-cap li a,
.community-box ul li a:hover,
.footer-widget ul li a:hover,
.news-box:hover .new-txt h6 a,
.deprt-icon-box:hover h6 a,
.event-list li strong.edate,
.event-list li.el-title p i,
.recent-events .event-list:hover h6 a,
.event-cap h5 a:hover,
.event-cap ul li:after,
.community-links-style-two li a:hover,
.team-info ul li a:hover,
#h3team-slider .owl-next,
#h3team-slider .owl-prev,
.home3.emergency-numbers .e-numbers .em-box i,
.event-list-box .edate strong,
.event-list-box .event-title p i,
.event-list-box:hover .event-title h6 a,
.widget h6 a:hover,
.team-detail .advisor,
.checklist li i,
.deprt-icon-box:hover h5 a,
.city-updates ul li strong a:hover,
.ch-box .ch-txt h6 a:hover,
.gallery-thumb a,
.add-box-2 i,
.event-share ul a:hover.like:after,
.campaign-box:hover h6 a,
.campaign-box:hover h5 a,
.causes-listing .campaign-box:hover h4 a,
.login-account input[type="submit"]:hover,
.register-account a {
  color: #1e4a6c;
}

.h3-logo-row ul.quick-links li a:hover,
.community-box:hover a.see-more,
.cs-newsletter-form input.form-control,
.cs-txt .countdown-section,
.fact-box:hover,
.e-numbers .em-box:hover,
.community-box a.see-more:hover,
.event-list a.joinnow:hover,
.recent-events .event-list:hover a.joinnow,
#h3team-slider .owl-next:hover,
#h3team-slider .owl-prev:hover,
.site-pagination .pagination > .active > a,
.site-pagination .pagination > .active > a:focus,
.site-pagination .pagination > .active > a:hover,
.site-pagination .pagination > .active > span,
.site-pagination .pagination > .active > span:focus,
.site-pagination .pagination > .active > span:hover,
.site-pagination .pagination > li > a:focus,
.site-pagination .pagination > li > a:hover,
.site-pagination .pagination > li > span:focus,
.site-pagination .pagination > li > span:hover,
.event-list-box:hover a.join-now,
.tags-widget a:hover,
.post-comments-form input[type="submit"]:hover,
.event-share ul a:hover,
.single-donation-box
  .radio-boxes
  input[type="radio"].css-radio
  + label.css-label:hover,
.single-donation-box
  .radio-boxes
  input[type="radio"].css-radio:checked
  + label.css-label,
.radio-boxes input[type="radio"].css-radio + label.css-label:hover,
.radio-boxes input[type="radio"].css-radio:checked + label.css-label,
.fact-box:hover {
  border-color: #1e4a6c;
}

.event-cap {
  border-left-color: #ff7200;
}
</style>
