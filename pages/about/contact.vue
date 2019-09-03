<template>
  <div class="contact container phone-container">
    <div class="contact-form flex clearfix w100">
      <div class="row w100 flex">
        <div class="col-sm-6 flex contact-line ">
          <div class="w100">
            <h3 class="fon-impact fon24">
              <img src="~/assets/images/about/Feedback.png" alt srcset>
            </h3>
            <p class="fon24">
              在线留言
            </p>
          </div>
          <div class="max350">
            {{ contact.desc }}
          </div>
          <div class="fon-ar fon14 text-uppercase color9 w100">
            <p>Thank you</p>
            <p>For your support</p>
          </div>
        </div>
        <div class="col-sm-6 ">
          <!-- 提交表单 -->
          <From />
        </div>
      </div>
    </div>

    <!-- 地图 -->
    <div class="map flex">
      <div class="w76 positionr">
        <img src="~/assets/images/about/map-img.jpg" alt srcset class="w100 h100">
        <div id="map" class="positionb" />
      </div>
      <div class="w24 flex-item">
        <div>
          <div v-html="contact.map" />
          <p>
            <a :href="contact.mapUrl" target="_blank" class="more">查看详细线路</a>
          </p>
        </div>
      </div>
    </div>

    <!-- 地图 -->
  </div>
</template>
<style lang="scss" scoped>
.contact-form {
  padding: 25px 0 0;
}
.fon-ar {
  font-weight: bold;
}
.max350 {
  max-width: 350px;
  padding: 15px 0;
}
.fon-impact {
  font-family: "Impact";
  font-weight: bold;
}
.contact-line {
  align-content: space-between;
  align-items: center;
}
.map {
  padding: 60px 0;
  .w76 {
    width: 76%;
  }
  .w24 {
    width: 24%;
    background: #33ace2;
    color: #fff;
    padding: 15px;
  }
}
.more {
  display: inline-block;
  width: 150px;
  height: 45px;
  line-height: 45px;
  background: #f7f7f7;
  text-align: center;
  color: #333;
  margin: 30px 0 0 0;
}

@media screen and (max-width: 767px) {
  .map {
    .w76 {
      height: 300px;
    }
    .w76,
    .w24 {
      width: 100%;
    }
  }
}
</style>
<style>
.BMap_Marker.BMap_noprint {
  background: url("http://api.map.baidu.com/lbsapi/createmap/images/icon.png")
    no-repeat 5px 3px !important;
}
.BMapLabel {
  max-width: 130px;
  width: 130px;
}
</style>
<script>
import From from '~/components/pages/about/Contact.vue'
let map
export default {
  components: {
    From,
  },
  data() {
    return {
      // map:''
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.$post('about/contact')
    return {
      contact: res.contact,
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    // 创建和初始化地图函数：
    initMap() {
      this.createMap() // 创建地图
      this.setMapEvent() // 设置地图事件
      this.addMapControl() // 向地图添加控件
      this.addMapOverlay() // 向地图添加覆盖物
    },
    createMap() {
      map = new window.BMap.Map('map')
      map.centerAndZoom(new window.BMap.Point(113.272224, 23.203776), 17)
    },
    setMapEvent() {
      map.enableScrollWheelZoom()
      map.enableKeyboard()
      map.enableDragging()
      map.enableDoubleClickZoom()
    },
    addClickHandler(target, window) {
      target.addEventListener('click', function() {
        target.openInfoWindow(window)
      })
    },
    addMapOverlay() {
      const markers = [
        {
          content: '地址：广州市白云区机场路1438号正阳大厦八楼',
          title: '广东丹姿集团有限公司',
          imageOffset: { width: -46, height: -21 },
          position: { lat: 23.201285, lng: 113.271631 },
        },
      ]
      for (let index = 0; index < markers.length; index++) {
        const point = new window.BMap.Point(
            markers[index].position.lng,
            markers[index].position.lat
        )
        const marker = new window.BMap.Marker(point, {
          icon: new window.BMap.Icon(
              'http://api.map.baidu.com/lbsapi/createmap/images/icon.png',
              new window.BMap.Size(20, 25),
              {
                imageOffset: new window.BMap.Size(
                    markers[index].imageOffset.width,
                    markers[index].imageOffset.height
                ),
              }
          ),
        })
        const label = new window.BMap.Label(markers[index].title, {
          offset: new window.BMap.Size(25, 5),
        })
        const opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false,
        }
        const infoWindow = new window.BMap.InfoWindow(
            markers[index].content,
            opts
        )
        marker.setLabel(label)
        this.addClickHandler(marker, infoWindow)
        map.addOverlay(marker)
      }
    },
    // 向地图添加控件
    addMapControl() {
      const scaleControl = new window.BMap.ScaleControl({
        anchor: window.BMap_ANCHOR_BOTTOM_LEFT,
      })
      scaleControl.setUnit(window.BMap_UNIT_IMPERIAL)
      map.addControl(scaleControl)
      const navControl = new window.BMap.NavigationControl({
        anchor: window.BMap_ANCHOR_TOP_LEFT,
        type: window.BMap_NAVIGATION_CONTROL_LARGE,
      })
      map.addControl(navControl)
      const overviewControl = new window.BMap.OverviewMapControl({
        anchor: window.BMap_ANCHOR_BOTTOM_RIGHT,
        isOpen: true,
      })
      map.addControl(overviewControl)
    },
    // var map;
  },
}
</script>
