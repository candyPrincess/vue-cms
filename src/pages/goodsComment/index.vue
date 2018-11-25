<template>
   <div class="goodsCommentContainer">
       <comment :id="id"></comment>
    </div> 
</template>

<script>
import comment from "../../components/comment/index.vue"
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    methods:{

    },
    components: {
        comment
    }
}
</script>


<style>

</style>
