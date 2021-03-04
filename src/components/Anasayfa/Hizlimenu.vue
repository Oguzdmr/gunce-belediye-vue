<template>
    <div class="col-md-3">
                <div class="sidebar">
                  <!--Widget Start-->

                  <div class="widget">
                    <h4>Hızlı Men&#252;</h4>
                    <div class="categories inner">
                      <ul>
                        <li>
                           <router-link tag="a" to="/home/mecliskararlari">Meclis Kararları</router-link>  
                          
                        </li>
                        <li>
                            <router-link tag="a" to="/home/komisyonkararlari">Komisyon Kararları</router-link>  
                          
                        </li>
                        <li>
                          <router-link tag="a" to="/home/faaliyetraporlari">Faaliyet Raporları</router-link>  
                          
                        </li>
                        <li>
                            <router-link tag="a" to="/home/baskanasor">Başkana Sor</router-link> 
                        </li>
                        <li>
                            <router-link tag="a" to="/home/birfikrimvar">Bir Fikrim Var</router-link>
                        </li>

                        <li><router-link tag="a" to="/haberler/1">Haberler</router-link></li>
                      </ul>
                    </div>
                  </div>
                  <!--Widget End-->
                  <!--Widget Start-->
                  <div class="widget">
                    <h4>Yaklaşan Etkinlikler</h4>
                    <div class="recent-posts inner">
                      <ul></ul>
                    </div>
                  </div>
                  <!--Widget End-->
                </div>
              </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>