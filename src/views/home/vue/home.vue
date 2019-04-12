<template>
   <!-- <div class="goods">
        <van-loading type="spinner" color="white" />
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" >
            </van-swipe-item>
        </van-swipe>

        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：{{ goods.express }}</van-col>
                <van-col span="14">剩余：{{ goods.remain }}</van-col>
            </van-cell>
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
                <template slot="title">
                    <span class="van-cell-text">有赞的店</span>
                    <van-tag class="goods-tag" type="danger">官方</van-tag>
                </template>
            </van-cell>
            <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell title="查看商品详情" is-link @click="sorry" />
        </van-cell-group>

        <van-goods-action>
            <van-goods-action-mini-btn icon="chat-o" @click="sorry">
                客服
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
                购物车
            </van-goods-action-mini-btn>
            <van-goods-action-big-btn @click="sorry">
                加入购物车
            </van-goods-action-big-btn>
            <van-goods-action-big-btn primary @click="sorry">
                立即购买
            </van-goods-action-big-btn>
        </van-goods-action>
    </div>-->
    <div class="bd">
        <img src="../../../assets/dong.gif" alt="">
    </div>
    
</template>

<script>
    import {Toast} from 'vant';
    import {APIS}from '../../../../src/api/serviceAPIS'
    export default {
        data() {
            return {
                goods: {
                    title: '美国伽力果（约680g/3个）',
                    price: 2680,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ]
                }
            };
        },
        created: function (){
          APIS.login({"count":10,"start":0}).then(function (e) {
                console.log(e)
            }).catch(function (e) {
              console.log(e)
          })
        },
        methods: {
            formatPrice() {
                return '¥' + (this.goods.price / 100).toFixed(2);
            },
            onClickCart() {
                this.$router.push('cart');
            },
            sorry() {
                Toast.loading({
                    mask: true,
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message: '倒计时 3 秒'
                });
            }
        }
    };
</script>

<style lang="scss">
    .bd{
        height: 100%;
        position: relative;
        img{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
    .goods {
        padding-bottom: 50px;
        .van-loading{
            width: 30px;
            height: 30px;
            z-index: 0;
            font-size: 0;
            line-height: 0;
            position: relative;
            vertical-align: middle;
            padding: 10px;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0.5);
        }
        &-swipe {
            img {
                width: 100%;
                display: block;
            }
        }
        &-title {
            font-size: 16px;
        }
        &-price {
            color: #f44;
        }
        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }
        &-cell-group {
            margin: 15px 0;
            .van-cell__value {
                color: #999;
            }
        }
        &-tag {
            margin-left: 5px;
        }
    }
</style>