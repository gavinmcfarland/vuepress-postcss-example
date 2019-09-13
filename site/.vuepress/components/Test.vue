<template>
	<div class="test">
		Test Component
	</div>
</template>

<style>
/* Trying to avoid having to manually import this file for each component */
@import '../styles/colors.css';

.test {
	color: red;
	@extend .green;
}
</style>
