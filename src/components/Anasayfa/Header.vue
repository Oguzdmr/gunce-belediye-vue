<template>
  <div>
    <header class="wf100 header-two">
      <div class="h3-logo-row wf100">
        <div class="container">
          <div class="row" id="headerrow">
            <div class="col-md-4 col-sm-4">
              <div class="h3-logo" style="float:left">
                <a href="index.html"
                  ><img
                    style="width:100% ; height:100% ; object-fit:contain"
                    src="../../../public/admin.togdem.com/AdminPanel_Assets/img/siteicerik/9/20/logo.png"
                    alt="G&#252;nce Belediyesi 3"
                /></a>
              </div>
            </div>
            <div class="col-md-8 col-sm-8">
              <br />
              <ul class="header-contact">
                <li>
                  <a href="tel:0(532) 169 80 66">
                    <span>Bize Ulaşın:</span> <strong>0(532) 169 80 66</strong>
                  </a>
                </li>
                <router-link tag="li" to="/kentrehberi" class="city-exp"
                  ><a
                    ><i class="fas fa-street-view"></i>
                    <strong> Şehri <br />Keşfet </strong></a
                  ></router-link
                >
                
                <li class="header-weather">
                  <i class="fas fa-cloud-sun"></i> 24°C / 75°F
                </li>
                <li class="header-weather">
                  <a href="https://www.instagram.com/instagram"
                    ><i
                      style="font-size:20px;"
                      class="fab fa-instagram fa-3x"
                    ></i
                    >&nbsp;</a
                  >
                  <a href="https://www.twitter.com/TBB"
                    ><i style="font-size:20px;" class="fab fa-twitter fa-3x"></i
                    >&nbsp;</a
                  >
                  <a href="https://www.facebook.com/tcbestepe"
                    ><i
                      style="font-size:20px;"
                      class="fab fa-facebook fa-3x"
                    ></i
                    >&nbsp;</a
                  >
                  <a
                    ><i style="font-size:20px;" class="fab fa-youtube fa-3x"></i
                  ></a>
                </li>
                <li class="header-weather">
                  <a
                    style="color:black;font-weight:bold; font-size:15px;"
                    onclick="dil()"
                    href="#"
                    >TR/EN</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="btn"
                    style="background:#ff7200; color:white;"
                    >e-Belediye</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="h3-navbar wf100">
        <div class="container">
          <nav class="navbar">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span> <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav ortala">
                <!--
                <router-link tag="li" to="/">
                <a
                    class=" main-menu-link main-menu-link-top"
                    ><span>Anasayfa</span></a
                  >
                </router-link>
                -->
                <li>
                  <a
                    href="/"
                    class=" main-menu-link main-menu-link-top"
                    ><span>Anasayfa</span></a
                  >
                </li>
                
                <li class=" menu-item-has-children ">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><span>Başkanımız</span></a
                  >
                  <ul class="dropdown-menu">
                    <router-link tag="li" to="/home/baskan" 
                      ><a class=" main-menu-link main-menu-link-sub"
                        ><span>Başkan Özgeçmişi</span></a
                      ></router-link
                    >
                   
                    <router-link tag="li" to="/home/baskanalbum"
                      ><a class=" main-menu-link main-menu-link-sub"
                        ><span>Başkan Albüm</span></a
                      ></router-link
                    >
                    
                    <router-link tag="li" to="/home/baskanasor"
                      ><a class=" main-menu-link main-menu-link-sub"
                        ><span>Başkana Sor</span></a
                      ></router-link
                    >
                    
                    <router-link tag="li" to="/home/baskanmesaji"
                      ><a class=" main-menu-link main-menu-link-sub"
                        ><span>Başkanın Mesajı</span></a
                      ></router-link
                    >
                    
                  </ul>
                </li>
                <li class=" menu-item-has-children ">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><span>Kurumsal</span></a
                  >
                  <ul class="dropdown-menu">
                    <router-link tag="li" to="/home/birimler"><a>Birimlerimiz</a></router-link>
                    
                    <router-link tag="li" to="/home/baskanyardimcilari"
                      ><a>Başkan Yardımcıları</a></router-link
                    >
                    
                    <router-link tag="li" to="/home/meclisuyeleri"><a>Meclis Üyeleri</a></router-link>
                    
                    <router-link tag="li" to="/home/encumenler"><a>Encümen</a></router-link>
                    
                    <router-link tag="li" to="/home/muhtarlar"><a>Muhtarlıklar</a></router-link>
                    
                    <router-link tag="li" to="/home/eskibaskanlar"><a>Eski Başkanlar</a></router-link>
                    
                    <router-link tag="li" to="/home/mecliskararlari"><a>Meclis Kararları</a></router-link>
                    
                    <router-link tag="li" to="/home/komisyonkararlari"><a>Komisyon Kararları</a></router-link>
                    
                    <router-link tag="li" to="/home/faaliyetraporlari"><a>Faaliyet Raporları</a></router-link>
                    
                    <router-link tag="li" to="/home/misyonvizyon"><a>Misyon & Vizyon</a></router-link>
                    
                  </ul>
                </li>
                <li class=" menu-item-has-children ">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><span>G&#252;nce</span></a
                  >
                  <ul class="dropdown-menu">
                    <router-link tag="li" to="/home/tarihce"><a>G&#252;nce Tarihçesi</a></router-link>  
                    
                    <router-link tag="li" to="/kentrehberi"
                      ><a>Kent Rehberi</a></router-link
                    >
                    
                    <router-link tag="li" to="/home/galeri"><a>Fotoğraflarla G&#252;nce</a></router-link>
                    
                    <router-link tag="li" to="/home/sehitlerimiz"><a>Şehitlerimiz</a></router-link>
                    
                    <li><a href="#">360° G&#252;nce</a></li>
                  </ul>
                </li>
                <li class=" menu-item-has-children ">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><span>Güncel</span></a
                  >
                  <ul class="dropdown-menu">
                    <router-link tag="li" to="/haberler/1"><a><span>Haberler</span></a></router-link>
                   
                    <router-link tag="li" to="/etkinlikler/1"><a><span>Etkinlikler</span></a></router-link>
                    
                    <router-link tag="li" to="/home/duyurular"><a><span>Duyurular</span></a></router-link>
                    
                    <router-link tag="li" to="/projeler"
                      ><a>Projeler</a></router-link
                    >
                    
                  </ul>
                </li>
                <li class=" menu-item-has-children ">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ><span>Hizmetlerimiz</span></a
                  >
                  <ul class="dropdown-menu">
                    <li><a href="#">e-Belediye</a></li>
                    <router-link tag="li" to="/kentrehberi"
                      ><a>Kent Rehberi</a></router-link
                    >
                    
                    <router-link tag="li" to="/home/isteksikayet"><a>İstek & Şikayet</a></router-link>
                    
                    <li><a href="#">e-İmar</a></li>
                    <li><a>Nöbetçi Eczaneler</a></li>

                    <router-link tag="li" to="/home/vefatedenler"><a>Vefat Edenler</a></router-link>
                    
                    <router-link tag="li" to="/home/birfikrimvar"><a>Bir Fikrim Var</a></router-link>
                    
                    <li><a href="index.html">Şehir Kameraları</a></li>
                    <li>
                      <a href="home/belgeOrnekleri.html">Nikah Belgeleri</a>
                    </li>
                    <router-link tag="li" to="/home/belgeornekleri"
                      ><a>Belge Örnekleri</a></router-link
                    >
                    
                  </ul>
                </li>
                <router-link tag="li" to="/home/iletisim">
                  <a
                    class=" main-menu-link main-menu-link-top"
                    ><span>İletişim</span></a
                  >
                </router-link>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
    header .container {
            text-align: center;
        }

        .logo {
            margin: 10px 20px;
            width: 150px;
        }

        .h3-navbar {
            box-shadow: 2px 1px 20px 0px rgba(0, 0, 0,0.4);
        }

        .team-txt, .hed-div, .new-txt {
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

        .slick-prev, .slick-next {
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

            .slick-prev:hover, .slick-next:hover {
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

</style>
