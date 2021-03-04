<template>
<div id="nav">
    <nav id="sidebar">
        <div id="dismiss"> <i class="fas fa-arrow-right"></i> </div>
        <div class="sidebar-header"> <img src="../../../public/admin.togdem.com/AdminPanel_Assets/img/siteicerik/9/20/logo.png" alt="G&#252;nce Belediyesi 3"> </div>
                <ul class="list-unstyled components">
                    <li>
                        <a href="/">Anasayfa</a>
                    </li>
                    <router-link tag="li" to="/home/baskan"><a>Başkanımız</a></router-link>
                    
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kurumsal <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <router-link tag="li" to="/home/baskanyardimcilari"><a>Başkan Yardımcıları</a></router-link>
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
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">G&#252;nce Belediyesi 3 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <router-link tag="li" to="/home/tarihce"><a>G&#252;nce Belediyesi 3 Tarihçesi</a></router-link>
                            <router-link tag="li" to="/home/tarihce"><a>Fotoğraflarla G&#252;nce Belediyesi 3</a></router-link>
                            <router-link tag="li" to="/home/sehitlerimiz"><a>Şehitlerimiz</a></router-link>

                            <router-link tag="li" to="/home/vefatedenler"><a>Vefat Edenler</a></router-link>
                            <router-link tag="li" to="/home/yenidoganlar"><a>Yeni Doğanlar</a></router-link>
                            <router-link tag="li" to="/home/yararlilinkler"><a>Yararlı Linkler</a></router-link>

                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Güncel <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <router-link tag="li" to="/haberler/1"><a>Haberler</a></router-link>
                            <router-link tag="li" to="/home/duyurular"><a>Duyurular</a></router-link>
                            <router-link tag="li" to="/etkinlikler/1"><a>Etkinlikler</a></router-link>
                            <router-link tag="li" to="/home/galeri"><a>Galeri</a></router-link>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hizmetlerimiz <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <router-link tag="li" to="/home/baskanasor"><a>Başkana Sor</a></router-link>
                            <router-link tag="li" to="/home/bifikrimvar"><a>Bir Fikrim Var</a></router-link>
                            <li><a href="#">Nöbetçi Eczaneler</a></li>
                            
                        </ul>
                    </li>
                    <router-link tag="li" to="/home/iletisim"><a>İletişim</a></router-link>
                </ul>

    </nav>
</div>
    
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>