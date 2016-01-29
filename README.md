#incrementIt

A basic number incrementer.

####Sample usage (with data attributes):

```
<div class="number" data-from="0" data-to="10" data-speed="100"></div>

<script>
$( '.number' ).incrementIt();
</script>

```

####Sample usage (passing values):

```
<div class="number"></div>

<script>
$( '.number' ).incrementIt({
    speed: 100,
    from: 0,
    to: 10,
});
</script>

```
