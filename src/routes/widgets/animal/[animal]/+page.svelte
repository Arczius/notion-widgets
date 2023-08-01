<section>
    <div class="w-full">
        <img class="aspect-square object-cover object-center w-full" src={data.data.animal !== 'fox' ? data.data.image.url : data.data.image.image} alt={data.data.animal}>
    </div>
</section>

<script>
    export let data
</script>

