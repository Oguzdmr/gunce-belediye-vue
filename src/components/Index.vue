<template>
  <div id="index">
      <div id="ploader">
        <img src="../../public/admin.togdem.com/AdminPanel_Assets/img/ploader.gif" />
    </div>
    <!--Wrapper Start-->
    <div class="wrapper">
      <!--Header Start-->
      <Header />
      <!--Header End-->

      <section
        id="baslik"
        class="wf100 subheader"
        style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005152448130.jpg) no-repeat;background-size:cover; "
      >
        <div class="container">
          <h2>Anasayfa</h2>
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li>Anasayfa</li>
          </ul>
        </div>
      </section>

      <Slider />

      <div>
        <div class="main-content">
        <!--Mayor Msg with Video Start-->
        <section
          class="Mayor-video-msg"
          style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/281.png) no-repeat; background-size:cover;"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-5">
                <!--Mayor Msg Start-->
                <div class="city-tour gallery" style="text-align:center;">
                  <img
                    width="360"
                    src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151853026.png"
                    alt=""
                  />
                </div>
                <!--Mayor Msg End-->
              </div>
              <div class="col-md-8 col-sm-7">
                <div class="Mayor-welcome">
                  <h5></h5>
                  <p>
                    Ben G&#252;nce Belediye Başkanı Ahmet G&#252;nceli,
                    belediyemizin website demosunda başkan olarak buradayım
                    G&#252;nce hayali bir belediyedir. Sizde b&#246;yle bir
                    siteye sahip olmak i&#231;in l&#252;tfen bizimle iletişime
                    ge&#231;in.
                  </p>
                  <h6>Ahmet G&#252;nceli</h6>
                  <strong>G&#252;nce Belediyesi 3 Başkanı</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--Mayor Msg with Video End-->
        <section
          id="haberlerdiv"
          class="wf100 p75 recent-events"
          style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/280.png) no-repeat; background-size:cover;"
        >
          <div class="container" style="background:white;">
            <div
              class="row"
              style="box-shadow:0 0 20px #ccc; padding-bottom:30px;"
            >
              <div class="col-md-8">
                <h3>Duyurular</h3>
                <div class="recent-event-block">
                  <!--Slider Big Slider Start-->
                  <div class="recent-event-slider">
                    <div class="event-big">
                      <router-link tag="a" to="/haberler/mobil-uygulamamiz-yayinda-160">
                          <div class="event-cap">
                          <h5>Mobil Uygulamamız Yayında.</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/160/20201005152026244.jpg"
                          alt="Mobil Uygulamamız Yayında."
                        />
                      </router-link>
                      <!--
                      <a href="haberler/mobil-uygulamamiz-yayinda-160.html"
                        ><div class="event-cap">
                          <h5>Mobil Uygulamamız Yayında.</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/160/20201005152026244.jpg"
                          alt="Mobil Uygulamamız Yayında."
                        />
                      </a> -->
                    </div>
                    <div class="event-big">
                      <router-link tag="a" to="/haberler/turistler-ilcemizi-artik-daha-cok-seviyor-159">
                        <div class="event-cap">
                          <h5>Turistler ilçemizi artık daha çok seviyor.</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/159/20201005152051275.jpg"
                          alt="Turistler ilçemizi artık daha çok seviyor."
                        />
                      </router-link>
                      <!--
                      <a
                        href="haberler/turistler-ilcemizi-artik-daha-cok-seviyor-159.html"
                        ><div class="event-cap">
                          <h5>Turistler ilçemizi artık daha çok seviyor.</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/159/20201005152051275.jpg"
                          alt="Turistler ilçemizi artık daha çok seviyor."
                        />
                      </a> -->
                    </div>
                    <div class="event-big">
                      <router-link tag="a" to="haberler/belediye-kultur-evi-hizmete-girdi-21">
                        <div class="event-cap">
                          <h5>Belediye Kültür Evi Hizmete Girdi !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/21/20201005152119228.jpg"
                          alt="Belediye Kültür Evi Hizmete Girdi !"
                        />
                      </router-link>
                      <!--
                      <a
                        href="haberler/belediye-kultur-evi-hizmete-girdi-21"
                        ><div class="event-cap">
                          <h5>Belediye Kültür Evi Hizmete Girdi !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/21/20201005152119228.jpg"
                          alt="Belediye Kültür Evi Hizmete Girdi !"
                        />
                      </a> -->
                    </div>
                    <div class="event-big">
                      <router-link tag="a" to="/haberler/belediye-otoparkimiz-hizmete-girdi-16">
                        <div class="event-cap">
                          <h5>Belediye Otoparkımız Hizmete Girdi !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/16/20201005152215945.jpg"
                          alt="Belediye Otoparkımız Hizmete Girdi !"
                        />
                      </router-link>
                      <!--
                      <a
                        href="haberler/belediye-otoparkimiz-hizmete-girdi-16.html"
                        ><div class="event-cap">
                          <h5>Belediye Otoparkımız Hizmete Girdi !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/16/20201005152215945.jpg"
                          alt="Belediye Otoparkımız Hizmete Girdi !"
                        />
                      </a>-->
                    </div>
                    <div class="event-big">
                      <router-link tag="a" to="/haberler/robotik-kodlama-dersleri-basliyor-15">
                        <div class="event-cap">
                          <h5>Robotik Kodlama Dersleri Başlıyor !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/15/20201005152238054.jpg"
                          alt="Robotik Kodlama Dersleri Başlıyor !"
                        />
                      </router-link>
                      <!--
                      <a
                        href="haberler/robotik-kodlama-dersleri-basliyor-15.html"
                        ><div class="event-cap">
                          <h5>Robotik Kodlama Dersleri Başlıyor !</h5>
                          <p>
                            Türkçe Lorem Ipsum, tasarım yaparken "burada metin
                            olacak" şeklinde yinelemeler yerine Türkçe'ye benzer
                            şekilde anlamsız yazılar, lorem ipsum dolar sit
                            amet, lorem ipsut text üretir. Böylece dikkatler...
                          </p>
                        </div>
                        <img
                          style="height:450px;width:100%;object-fit:cover;"
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/15/20201005152238054.jpg"
                          alt="Robotik Kodlama Dersleri Başlıyor !"
                        />
                      </a>
                      -->
                    </div>
                  </div>
                  <!--Slider Big Slider End-->
                  <!--Slider Big Slider Nav-->
                  <div class="recent-event-slider-nav" id="kucukresimler">
                    <div>
                      <img
                        src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/160/20201005152026244.jpg"
                        alt="Mobil Uygulamamız Yayında."
                      />
                    </div>
                    <div>
                      <img
                        src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/159/20201005152051275.jpg"
                        alt="Turistler ilçemizi artık daha çok seviyor."
                      />
                    </div>
                    <div>
                      <img
                        src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/21/20201005152119228.jpg"
                        alt="Belediye Kültür Evi Hizmete Girdi !"
                      />
                    </div>
                    <div>
                      <img
                        src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/16/20201005152215945.jpg"
                        alt="Belediye Otoparkımız Hizmete Girdi !"
                      />
                    </div>
                    <div>
                      <img
                        src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/9/15/20201005152238054.jpg"
                        alt="Robotik Kodlama Dersleri Başlıyor !"
                      />
                    </div>
                  </div>
                  <!--Slider Big Slider Nav-->
                </div>
              </div>
              <div class="col-md-4">
                <h3>Etkinlikler</h3>
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a
                      href="#Events"
                      aria-controls="Events"
                      role="tab"
                      data-toggle="tab"
                      >Duyurular</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="#Meetings"
                      aria-controls="Meetings"
                      role="tab"
                      data-toggle="tab"
                      >Etkinlikler</a
                    >
                  </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="Events">
                    <ul class="event-list">
                      <router-link tag="a" to="/home/duyurudetay/62">
                        <li style="display:none" id="metin">
                          Belediye uygulamamızı indirip bize geri dönüş yapmayı
                          unutmayınız...
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediye uygulamamızı indirip bize geri dönüş
                            yapmayı unutmayınız...
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li>
                      </router-link>
                      <!--
                      <a href="home/duyurudetay/62.html"
                        ><li style="display:none" id="metin">
                          Belediye uygulamamızı indirip bize geri dönüş yapmayı
                          unutmayınız...
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediye uygulamamızı indirip bize geri dönüş
                            yapmayı unutmayınız...
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/home/duyurudetay/61">
                        <li style="display:none" id="metin">
                          Belediyemiz hizmetlerine bir yenisini daha ekledi.
                          Artık Play Store ve App Store'dayız.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediyemiz hizmetlerine bir yenisini daha ekledi.
                            Artık Play Store ve...
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li>
                      </router-link>
                      <!--
                      <a href="home/duyurudetay/61.html"
                        ><li style="display:none" id="metin">
                          Belediyemiz hizmetlerine bir yenisini daha ekledi.
                          Artık Play Store ve App Store'dayız.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediyemiz hizmetlerine bir yenisini daha ekledi.
                            Artık Play Store ve...
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/home/duyurudetay/60"> 
                        <li style="display:none" id="metin">
                          Belediye Başkanımız Ahmet GÜNCELİ'nin sizlere mesajı
                          var.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediye Başkanımız Ahmet GÜNCELİ'nin sizlere mesajı
                            var.
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li>
                      </router-link>
                      <!--
                      <a href="home/duyurudetay/60.html"
                        ><li style="display:none" id="metin">
                          Belediye Başkanımız Ahmet GÜNCELİ'nin sizlere mesajı
                          var.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediye Başkanımız Ahmet GÜNCELİ'nin sizlere mesajı
                            var.
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/home/duyurudetay/59">
                        <li style="display:none" id="metin">
                          Belediyemize Fen İşleri biriminde çalışacak 2 personel
                          alınacaktır.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediyemize Fen İşleri biriminde çalışacak 2
                            personel alınacaktır.
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li>
                      </router-link>
                      <!--
                      <a href="home/duyurudetay/59.html"
                        ><li style="display:none" id="metin">
                          Belediyemize Fen İşleri biriminde çalışacak 2 personel
                          alınacaktır.
                        </li>
                        <li>
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/duyuru.png"
                            alt=""
                          />
                        </li>
                        <li class="el-title" style="float:left;width:70%;">
                          <p style="color:black;">
                            Belediyemize Fen İşleri biriminde çalışacak 2
                            personel alınacaktır.
                          </p>
                          <p>26 Ağu, 2019</p>
                        </li></a
                      > -->
                    </ul>
                  </div>
                  <div role="tabpanel" class="tab-pane" id="Meetings">
                    <ul class="event-list">
                      <router-link tag="" to="/etkinlikler/satranc-turnuvasi-50">
                        <li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/satranc-turnuvasi.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Satranç Turnuvası</p>
                          <p>26 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Belediye
                            Binası
                          </p>
                        </li>
                      </router-link>
                      <!--
                      <a href="etkinlikler/satranc-turnuvasi-50.html"
                        ><li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/satranc-turnuvasi.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Satranç Turnuvası</p>
                          <p>26 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Belediye
                            Binası
                          </p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/etkinlikler/bir-fidan-bir-hayat-51">
                        <li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/bir-fidan-bir-hayat.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Bir Fidan Bir Hayat</p>
                          <p>27 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Ormanı
                          </p>
                        </li>
                      </router-link>
                      <!--
                      <a href="etkinlikler/bir-fidan-bir-hayat-51.html"
                        ><li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/bir-fidan-bir-hayat.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Bir Fidan Bir Hayat</p>
                          <p>27 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Ormanı
                          </p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/etkinlikler/belediyemiz-konser-duzenliyor-52">
                        <li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/20201005152646910.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">
                            Belediyemiz Konser Düzenliyor.
                          </p>
                          <p>28 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Konser
                            Alanı
                          </p>
                        </li>
                      </router-link>
                      <!--
                      <a
                        href="etkinlikler/belediyemiz-konser-duzenliyor-52.html"
                        ><li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/20201005152646910.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">
                            Belediyemiz Konser Düzenliyor.
                          </p>
                          <p>28 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Konser
                            Alanı
                          </p>
                        </li></a
                      > -->
                    </ul>
                    <ul class="event-list">
                      <router-link tag="a" to="/etkinlikler/cocuk-senligi-53">
                        <li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/20201005152555114.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Çocuk Şenliği.</p>
                          <p>29 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Şenlik
                            Alanı
                          </p>
                        </li>
                      </router-link>
                      <!--
                      <a href="etkinlikler/cocuk-senligi-53.html"
                        ><li style="width:35%;">
                          <img
                            src="../../public/admin.togdem.com/AdminPanel_Assets/img/etkinlikler/9/20201005152555114.jpg"
                            alt=""
                          />
                        </li>
                        <li style="width:60%;" class="el-title">
                          <p style="color:black;">Çocuk Şenliği.</p>
                          <p>29 Eyl, 2019</p>
                          <p>
                            <i class="fas fa-map-marker-alt"></i>Günce Şenlik
                            Alanı
                          </p>
                        </li></a
                      > -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Departments & Information Desk Start-->
        <section
          class="wf100 p75-50  depart-info"
          style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/278.jpg) no-repeat; background-size:cover;"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="title-style-3">
                  <h3>Hizmetlerimiz</h3>
                  <p>
                    Siz değerli halkımıza sunduğumuz hizmetlerimizle hayatınızı
                    kolaylaştırıyoruz.
                  </p>
                </div>
                <div class="row">
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/ebelediye.svg" alt="" />
                      <h6><a href="#">e-Belediye</a></h6>
                      <a class="rm" href="#">Hizmete Git</a>
                    </div>
                  </div>
                  <!--Icon Box End-->
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/kentrehberi.svg" alt="" />
                      <h6><router-link tag="a" to="/kentrehberi">Kent Rehberi</router-link></h6>
                      <router-link tag="a" to="/kentrehberi" class="rm">Hizmete Git</router-link>  
                    </div>
                  </div>
                  <!--Icon Box End-->
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/isteksikayet.svg" alt="" />
                      <h6>
                        <router-link tag="a" to="/home/isteksikayet">İstek ve Şikayet</router-link>
                        
                      </h6>
                      <router-link tag="a" to="/home/isteksikayet" class="rm">Hizmete Git</router-link>
                      
                    </div>
                  </div>
                  <!--Icon Box End-->
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/eimar.svg" alt="" />
                      <h6>
                        <a href="#">e-İmar</a>
                      </h6>
                      <a class="rm" href="#">Hizmete Git</a>
                    </div>
                  </div>
                  <!--Icon Box End-->
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/nobetcieczaneler.png" alt="" />
                      <h6>
                        <a>N&#246;bet&#231;i Eczaneler</a>
                      </h6>
                      <a class="rm">Hizmete Git</a>
                    </div>
                  </div>

                  <!--Icon Box End-->
                  <!--Icon Box Start-->
                  <div class="col-md-4 col-sm-4">
                    <div class="deprt-icon-box">
                      <img src="images/vefatedenler.svg" alt="" />
                      <h6>
                        <router-link tag="a" to="/home/vefatedenler">Vefat Edenler</router-link>
                        
                      </h6>
                      <router-link tag="a" to="/home/vefatedenler" class="rm">Hizmete Git</router-link>
                      
                    </div>
                  </div>
                  <!--Icon Box End-->
                </div>
              </div>
              <div class="col-md-3">
                <div class="emergency-info">
                  <h5>Yardım Hatları ve Acil Servisler</h5>
                  <div
                    class="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <!--Panel Start-->
                    <div class="panel">
                      <div class="panel-heading" role="tab" id="headingOne">
                        <h6>
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >Başkan Ofisi
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div class="panel-body">
                          <ul>
                            <li>
                              <i class="fas fa-user-tie"></i> G&#252;nce
                              Belediyesi Başkanı Ahmet G&#252;nceli
                            </li>
                            <li>
                              <i class="far fa-building"></i>G&#252;nce Belediye
                              Binası
                            </li>
                            <li>
                              <i class="fas fa-phone"></i> 0 (333) 333 33 33
                            </li>
                            <li>
                              <i class="fas fa-fax"></i> 0 (333) 333 33 33
                            </li>
                            <li>
                              <i class="far fa-envelope"></i
                              >baskan@g&#252;nce.bel.tr
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--Panel End-->
                    <!--Panel Start-->
                    <div class="panel">
                      <div class="panel-heading" role="tab" id="heading2">
                        <h6>
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse2"
                            aria-expanded="true"
                            aria-controls="collapse2"
                            >Polis İmdat
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse2"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading2"
                      >
                        <div class="panel-body">
                          <ul>
                            <li>
                              <div class="deprt-icon-box">
                                <img src="images/polis.html" alt="" />
                                <h6>
                                  <a href="#">Polis İmdat<br />155</a>
                                </h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--Panel End-->
                    <!--Panel Start-->
                    <div class="panel">
                      <div class="panel-heading" role="tab" id="heading3">
                        <h6>
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse3"
                            aria-expanded="true"
                            aria-controls="collapse3"
                            >Hastane
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapse3"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading3"
                      >
                        <div class="panel-body">
                          <ul>
                            <li>
                              <div class="deprt-icon-box">
                                <img src="images/hastane.html" alt="" />
                                <h6>
                                  <a href="#">Hastane<br />112</a>
                                </h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--Panel End-->
                    <!--Panel Start-->
                    <div class="panel">
                      <div class="panel-heading" role="tab" id="heading4">
                        <h6>
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapse4"
                            aria-expanded="true"
                            aria-controls="collapse4"
                            >İtfaiye</a
                          >
                        </h6>
                      </div>
                      <div
                        id="collapse4"
                        class="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading4"
                      >
                        <div class="panel-body">
                          <ul>
                            <li>
                              <div class="deprt-icon-box">
                                <img src="images/itfaiye.html" alt="" />
                                <h6>
                                  <a href="#">İtfaiye<br />110</a>
                                </h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!--Panel End-->
                  </div>
                </div>
                <router-link tag="a" to="/home/duyurular" class="jobs-link">Duyurular</router-link>
                
                <ul class="reports">
                  <li>
                    <router-link tag="a" to="/home/baskanasor">
                      <i class="fas fa-question"></i>Başkana Sor
                    </router-link>
                   
                  </li>
                  <li>
                    <router-link tag="a" to="/home/bifikrimvar">
                      <i class="fas fa-lightbulb"></i>Bir Fikrim Var
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link tag="a" to="/home/iletisim">
                      <i class="fas fa-file-signature"></i>Bize Yazın
                    </router-link>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!--Departments & Information Desk End-->
        <!--Recent Events Start-->
        <!--Recent Events End-->
        <section
          class="wf100 p80 city-highlights "
          style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/282.png) no-repeat; background-size:cover;"
        >
          <div class="container">
            <div class="title-style-1 text-center white-text">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="container-fluid" id="sehirtanitim">
            <div id="highlight-slider" class="owl-carousel owl-theme">
              <!--Item Start-->
              <div class="item">
                <div class="ch-box">
                  <div class="ch-thumb">
                    <img
                      src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151757760.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ch-txt">
                    <h5><router-link tag="a" to="/home/galeri">Galeri</router-link></h5>
                  </div>
                </div>
              </div>
              <!--Item End-->
              <!--Item Start-->
              <div class="item">
                <div class="ch-box">
                  <div class="ch-thumb">
                    <img
                      src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151803885.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ch-txt">
                    <h5><router-link tag="a" to="/home/videogaleri">Video Galeri</router-link></h5>
                    
                  </div>
                </div>
              </div>
              <!--Item End-->
              <!--Item Start-->
              <div class="item">
                <div class="ch-box">
                  <div class="ch-thumb">
                    <img
                      src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151810089.png"
                      alt=""
                    />
                  </div>
                  <div class="ch-txt">
                    <h5><router-link tag="a" to="/kentrehberi">Tarihi Yerler</router-link></h5>
                    
                  </div>
                </div>
              </div>
              <!--Item End-->
              <!--Item Start-->
              <div class="item">
                <div class="ch-box">
                  <div class="ch-thumb">
                    <img
                      src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151817417.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ch-txt">
                    <h5><router-link tag="a" to="/kentrehberi">Sosyal Tesisler</router-link></h5>
                    
                  </div>
                </div>
              </div>
              <!--Item End-->
              <!--Item Start-->
              <div class="item">
                <div class="ch-box">
                  <div class="ch-thumb">
                    <img
                      src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151823089.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ch-txt">
                    <h5>
                      <router-link tag="a" to="/home/baskanalbum">Başkanla Fotoğraflarım</router-link>
                      
                    </h5>
                  </div>
                </div>
              </div>
              <!--Item End-->
            </div>
          </div>
        </section>

        <!-- Explore Community Start-->
        <section
          class="wf100 p80 explore-community"
          style="background-image:url(../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151742511.jpg) no-repeat; background-size:cover; color:white;"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3 style="color:white;">Birimlerimiz</h3>
                <ul class="community-links-style-two">
                  <li>
                    <router-link tag="a" to="/birimler/ornek-birim-24">
                      <i class="far fa-dot-circle"></i> Örnek Birim
                    </router-link>
                    
                  </li>
                  <li>
                    <router-link tag="a" to="/birimler/ornek-birim-25">
                      <i class="far fa-dot-circle"></i> Örnek Birim
                    </router-link>
                  </li>
                  <li>
                    <router-link tag="a" to="/birimler/ornek-birim-26">
                      <i class="far fa-dot-circle"></i> Örnek Birim
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <h3 style="color:white;">Projelerimiz</h3>
                <!--Team Slider Start-->
                <div id="h3team-slider" class="owl-carousel owl-theme">
                  <div class="item">
                    <div class="ch-box">
                      <div class="ch-thumb">
                        <img
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151829120.jpg"
                          alt=""
                        />
                      </div>
                      <div class="ch-txt">
                        <h5>
                          <router-link tag="a" to="/projeler/devameden/1">
                            Devam Eden Projeler
                          </router-link>
                          
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="ch-box">
                      <div class="ch-thumb">
                        <img
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151834839.jpg"
                          alt=""
                        />
                      </div>
                      <div class="ch-txt">
                        <h5>
                          <router-link tag="a" to="/projeler/tamamlanan/1">
                            Tamamlanan Projelerimiz
                          </router-link>
                          
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="ch-box">
                      <div class="ch-thumb">
                        <img
                          src="../../public/admin.togdem.com/AdminPanel_Assets/img/resimGuncelle/9/20201005151844604.jpg"
                          alt=""
                        />
                      </div>
                      <div class="ch-txt">
                        <h5>
                          <router-link tag="a" to="/projeler/planlanan/1">
                            Planlanan Projeler
                          </router-link>
                          
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Team Slider End-->
              </div>
            </div>
          </div>
        </section>
        <!-- Explore Community End-->
        <section class="wf100 p40">
          <div class="container" id="slayt">
            <a href="https://www.ombudsman.gov.tr/"
              ><img src="images/kucukresimler/kdk.png" height="75"
            /></a>
            <a href="https://www.tccb.gov.tr/"
              ><img src="images/kucukresimler/cumhurbaskanligi.png" height="75"
            /></a>
            <a href="https://www.icisleri.gov.tr/"
              ><img
                src="images/kucukresimler/Icisleri_Bakanligi.png"
                height="75"
            /></a>
            <a href="https://www.cimer.gov.tr/"
              ><img src="images/kucukresimler/Cimer.png" height="75"
            /></a>
            <a href="https://www.egm.gov.tr/"
              ><img src="images/kucukresimler/egm.png" height="75"
            /></a>
            <a href="https://www.turkiye.gov.tr/"
              ><img src="images/kucukresimler/edevlet.png" height="75"
            /></a>
            <a href="https://www.tbmm.gov.tr/"
              ><img src="images/kucukresimler/tbmm.png" height="75"
            /></a>
            <a href="http://www.tbb.gov.tr/"
              ><img src="images/kucukresimler/tbb.png" height="75"
            /></a>
            <a href="https://www.tkdk.gov.tr/"
              ><img src="images/kucukresimler/tkdk.png" height="75"
            /></a>
          </div>
        </section>
      </div>
      <div id="modal">
        <i
          class="fas fa-window-close fa-2x"
          style="color:red; position:fixed; left:calc(75% - 50px); cursor:pointer;"
        ></i>
        <h3>Duyurular</h3>
        <br />
        <p></p>
      </div>
      <div id="lightbox" class="lightbox" style="top: 1882px; left: 0px; display: none;"><div class="lb-outerContainer" style="width: 753px; height: 505px;"><div class="lb-container"><img class="lb-image" src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/32/250-bin-cicek-toprakla-bulusuyor-0.jpg" style="width: 745px; height: 497px;"><div class="lb-nav" style=""><a class="lb-prev" href="#" style="display: none;"></a><a class="lb-next" href="#" style=""></a></div><div class="lb-loader" style="opacity: 0.0199; display: none;"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer" style="width: 753px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption" style="display: none;"></span><span class="lb-number">Image 1 of 5</span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>
    <div id="fb-root"></div>
    </div>

      <Footer />
      
    </div>
    <!--Wrapper End-->

    <Nav />
    <div class="overlay"></div>
    <div id="lightbox" class="lightbox" style="top: 1882px; left: 0px; display: none;"><div class="lb-outerContainer" style="width: 753px; height: 505px;"><div class="lb-container"><img class="lb-image" src="../../public/admin.togdem.com/AdminPanel_Assets/img/haberler/32/250-bin-cicek-toprakla-bulusuyor-0.jpg" style="width: 745px; height: 497px;"><div class="lb-nav" ><a class="lb-prev" href="#" style="display: none;"></a><a class="lb-next" href="#" ></a></div><div class="lb-loader" style="opacity: 0.0199; display: none;"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer" style="width: 753px;"><div class="lb-data"><div class="lb-details"><span class="lb-caption" style="display: none;"></span><span class="lb-number">Image 1 of 5</span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>
    <div id="fb-root"></div>
  </div>
</template>

<script>
import Header from "./Anasayfa/Header";
import Slider from "./Anasayfa/Slider";
import Nav from "./Anasayfa/Nav";
import Footer from "./Anasayfa/Footer";



export default {
  name: "Index",
  components: {
    Header,
    Slider,
    Nav,
    Footer
  }, 
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resimslyt{
	background: #b1b1b1!important;
}
.resimslyt img{
	object-fit: contain!important;
}
.resimhov img{
	object-fit: contain!important;
	height: auto!important;
	width: 194px!important;
	margin-right: 10px;
	margin-top: 10px;
	background: #b1b1b1!important;
	box-shadow: 0px 0px 12px 1px #8888884f;
}
.resimhov :hover{
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
    box-shadow: 2px 1px 20px 0px rgba(0, 0, 0,0.4);
}

.team-txt, .hed-div, .new-txt {
    position: sticky;
    background: white;
    height: 100%;
}

.h3-logo-row {
    background: url(./images/img.png);
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
.lightbox-gallery {
  color: #000;
  overflow-x: hidden
}

.lightbox-gallery p {
  color: #fff
}

.lightbox-gallery h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: #000000
}


.lightbox-gallery .intro {
  font-size: 16px;
}

.lightbox-gallery .intro p {
  margin-bottom: 0
}

.lightbox-gallery .photos {
  padding-bottom: 20px
}

.lightbox-gallery .item {
  padding-bottom: 30px
}
.slick-prev, .slick-next, .city-tour strong, ul.reports, .h3-navbar .donate-btn a:hover, .wrap-404 a.back, .wrap-404 button.btn, .main-slider .owl-carousel button.owl-dot span:hover, .main-slider .owl-carousel button.owl-dot.active span, .banner-tags li:hover, .header .topbar, .city-highlights .owl-carousel .owl-nav button.owl-next:hover, .city-highlights .owl-carousel .owl-nav button.owl-prev:hover, .sub-menu a:hover, .logo-nav-row .dropdown-menu > li > a:hover, .slider-caption a:hover, .Mayor-text a:hover, .title-style-2 a:hover, .city-highlights .owl-carousel .owl-nav button.owl- next:hover, .city-highlights .owl-carousel .owl-nav button.owl-prev:hover, .emergency-info, .stay-connected input[type="submit"], .h2-Mayor-msg .Mayor-txt a:hover, .team-heading a:hover, .h3-slider-caption a:hover, .news-details blockquote, .single-post-tags a:hover, .post-comments-form input[type="submit"], .deprt-icon-box a.rm:hover, a.jobs-link:hover, .community-links-style-two li a img, .widget .upcoming-events li:hover .edate, .contact-team, .newsletter-style2 button, .post-comments-form input[type="submit"], .service-page-bottom .newsletter-form button, .city-updates li.more-news a:hover, .department-links li a, .contact-form input[type="submit"], .event-date-share .edate, .event-gallery .eg-thumb a:hover, a.dbutton, .dn-btn, .single-donation-box .progress .progress-bar, li.form-submit button, .donator-details input[type="submit"], .login-box input[type="submit"], .login-account, .register-account input[type="submit"], .home3.emergency-numbers .newsletter-form button {
    background-color: #ff7200;
}

.sub-menu a, .logo-nav-row .dropdown-menu > li > a, .e-numbers .info-num h3, .community-box h6, .twitter-widget a.reply-tw:hover, ul.post-time a i, .add-box i, .event-counter a, .event-content ul.emeta li strong, .event-gallery .eg-thumb a, .campaign-thumb a, ul.participants li strong i {
    color: #ff7200;
}

.event-post:hover .event-post-loc a, .event-share ul a.like, #haberbaskan .col-md-8, .h3-logo-row ul.quick-links li a:hover, #search .btn, #search .close, .slider-caption a, .Mayor-msg, .title-style-2 a, .latest-updates h6, .latest-updates ul li:after, .new-thumb a:hover, .thumb a:hover, .ch-box .ch-thumb a:hover, .city-highlights .owl-carousel .owl-nav button.owl-next, .city-highlights .owl-carousel .owl-nav button.owl-prev, .stay-connected, .e-numbers .em-box:hover, span.ecat, .highlights-cityscapes .owl-carousel .owl-nav button.owl- prev, .highlights-cityscapes .owl-carousel .owl-nav button.owl-next, .highlights-cityscapes .owl-carousel .owl-nav button.owl- prev:hover, .highlights-cityscapes .owl-carousel .owl-nav button.owl-next:hover, .community-box a.see-more:hover, .team-heading a, .home3.footer, .become-vol, .cross-btn:hover, .h3-navbar .donate-btn a, .h3-slider-caption a, .title-style-3 p:before, .news-box-f:after, .news-box:hover .news-box-f a, .deprt-icon-box a.rm, a.jobs-link, .recent-events .nav-tabs > li > a, .recent-events .nav-tabs > li > a:after, .recent-events .event-list:after, .event-list a.joinnow:hover, .recent-events .event-list:hover a.joinnow, .community-links-style-two li a:hover img, #h3team-slider .owl-next:hover, #h3team-slider .owl- prev:hover, .event-list-box:hover a.join-now, .widget .upcoming-events .edate, .tags-widget a:hover, .contact-team:hover, .post-comments-form input[type="submit"]:hover, .city-updates li.more-news a, .department-links li a.c9, .gallery-thumb a:hover, .contact-form input[type="submit"]:hover, .event-counter a:hover, .event-share ul a:hover, .campaign-thumb a:hover, .campaign-box:hover a.dbutton, .causes-listing .campaign-box:hover .dn-btn, .single-donation-box .radio-boxes input[type=radio].css- radio + label.css-label:hover, .single-donation-box .radio- boxes input[type=radio].css-radio:checked + label.css-label, .radio-boxes input[type=radio].css-radio + label.css-label:hover, .radio-boxes input[type=radio].css-radio:checked + label.css-label, li.form-submit button:hover, .donator-details input[type="submit"]:hover, .testimonials-section .owl-theme .owl-dots .owl-dot.active span, .testimonials-section .owl-theme .owl-dots .owl-dot span:hover, .login-account input[type="submit"], .register-account input[type="submit"]:hover, .cs-newsletter-form button.subscribe, ul.team-social:after, .call2action a, .h2-Mayor-msg, .newsletter-form button, .community-box a.see-more:hover, .community-box:hover a.see-more, .ecat.c1, .site-pagination .pagination > .active > a, .site-pagination .pagination > .active > a:focus, .site-pagination .pagination > .active > a:hover, .site-pagination .pagination > .active > span, .site-pagination .pagination > .active > span:focus, .site-pagination .pagination > .active > span:hover, .site-pagination .pagination > li > a:focus, .site-pagination .pagination > li > a:hover, .site-pagination .pagination > li > span:focus, .site-pagination .pagination > li > span:hover, .serbox-cap .rm:hover {
    background-color: #1e4a6c;
}

.lb-ser-box li:hover h6, .footer-social a:hover, .some-facts ul li:hover strong, .team-box .team-txt strong, .team-box:hover .team-txt h5, ul.check-list i, .local-box:hover a, .event-post-full:hover .event-post-loc a, .event-post-full:hover .event-post-txt h5 a, .news-post:hover .news-post-txt h5 a, .logo-nav-row ul.nav.navbar-nav.navbar-right .search-btn a, .logo-nav-row ul.nav.navbar-nav.navbar-right .bars-btn a, .logo-nav-row .nav .open > a, .logo-nav-row .nav .open > a:focus, .logo-nav-row .nav .open > a:hover, .logo-nav-row .navbar-nav > li > a:hover, .about-widget a:hover, .widget .recent-posts strong, .widget .recent-posts h6 a:hover, .button-group .button:hover, .button-group .button:active, .button-group .button.is-checked, .local-service-box:hover a, .latest-updates ul li strong a:hover, .event-post:hover .event-post-loc a, .event-post:hover h5 a, .new-thumb a, .thumb a, .ch-box .ch-thumb a, .ch-box .ch-txt ul li a:hover, .ch-box .ch-txt ul li:after, .ch-box .ch-txt h5 a:hover, .query ul li strong, .fact-box strong, .e-numbers .info-num strong, .e-numbers .em-box strong.em-num, .btn-group.share-post button.dropdown-toggle:hover, .news-meta .post-user, .hc-box .hc-box-cap li:after, .hc-box:hover .hc-box-cap h5 a, .hc-box:hover .hc-box-cap li a, .community-box ul li a:hover, .footer-widget ul li a:hover, .news-box:hover .new-txt h6 a, .deprt-icon-box:hover h6 a, .event-list li strong.edate, .event-list li.el-title p i, .recent-events .event-list:hover h6 a, .event-cap h5 a:hover, .event-cap ul li:after, .community-links-style-two li a:hover, .team-info ul li a:hover, #h3team-slider .owl-next, #h3team-slider .owl-prev, .home3.emergency-numbers .e-numbers .em-box i, .event-list-box .edate strong, .event-list-box .event-title p i, .event-list-box:hover .event-title h6 a, .widget h6 a:hover, .team-detail .advisor, .checklist li i, .deprt-icon-box:hover h5 a, .city-updates ul li strong a:hover, .ch-box .ch-txt h6 a:hover, .gallery-thumb a, .add-box-2 i, .event-share ul a:hover.like:after, .campaign-box:hover h6 a, .campaign-box:hover h5 a, .causes-listing .campaign-box:hover h4 a, .login-account input[type="submit"]:hover, .register-account a {
    color: #1e4a6c;
}

.h3-logo-row ul.quick-links li a:hover, .community-box:hover a.see-more, .cs-newsletter-form input.form-control, .cs-txt .countdown-section, .fact-box:hover, .e-numbers .em-box:hover, .community-box a.see-more:hover, .event-list a.joinnow:hover, .recent-events .event-list:hover a.joinnow, #h3team-slider .owl-next:hover, #h3team-slider .owl-prev:hover, .site-pagination .pagination > .active > a, .site-pagination .pagination > .active > a:focus, .site-pagination .pagination > .active > a:hover, .site-pagination .pagination > .active > span, .site-pagination .pagination > .active > span:focus, .site-pagination .pagination > .active > span:hover, .site-pagination .pagination > li > a:focus, .site-pagination .pagination > li > a:hover, .site-pagination .pagination > li > span:focus, .site-pagination .pagination > li > span:hover, .event-list-box:hover a.join-now, .tags-widget a:hover, .post-comments-form input[type="submit"]:hover, .event-share ul a:hover, .single-donation-box .radio-boxes input[type=radio].css-radio + label.css-label:hover, .single-donation-box .radio-boxes input[type=radio].css-radio:checked + label.css-label, .radio-boxes input[type=radio].css-radio + label.css-label:hover, .radio-boxes input[type=radio].css-radio:checked + label.css-label, .fact-box:hover {
    border-color:#1e4a6c;
}

.event-cap {
    border-left-color:#ff7200;
}
#baslik {
    display: none;
}

.event-big img, .slick-slide img {
    cursor: pointer;
}

#modal {
    position: fixed;
    z-index: 500;
    width: 50vw;
    height: 50vh;
    padding: 20px;
    background: lightgray;
    color: #333;
    left: 25vw;
    top: 30vh;
    box-shadow: 0px 0px 20px 2000px #000000ad;
    display: none;
}

.team-info {
    bottom: -55px;
}

.slick-track .event-big img {
    height: 550px;
    object-fit: contain;
}

.slick-slide img {
    height: 100px;
    object-fit: cover;
}

.slick-prev, .slick-next {
    background: #1e4a6c;
    height: 130px;
    color: white;
    border: none;
    font-weight: bolder;
    font-size: 30px;
    position: absolute;
    width: 40px;
    opacity: 0.6;
}

.slick-prev:hover, .slick-next:hover {
    opacity: 1;
}

.event-list img {
    width: 70px;
}

#Meetings .event-list img {
    width: 100%;
}

.slick-prev {
    top: -340px;
    left: 0;
}

.slick-next {
    top: -340px;
    left: calc(100% - 40px);
}

#slayt {
    margin-top: 50px;
    margin-bottom: 50px;
}

#slayt img {
    width: auto;
}


</style>