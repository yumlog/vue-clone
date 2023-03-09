<template>
	<div class="page-example container">
		<article>
			<h6>Vue Grid</h6>
			<Row>
				<Column :xs="4"><span class="block bg-primary-1">Column</span></Column>
				<Column :xs="4"><span class="block bg-primary-1">Column</span></Column>
				<Column :xs="4"><span class="block bg-primary-1">Column</span></Column>
			</Row>
			<hr>
			<Row>
				<Column :xs="4" :xsOffset="4"><span class="block bg-primary-1">Column</span></Column>
				<Column :xs="4"><span class="block bg-primary-1">Column</span></Column>
			</Row>
		</article>

		<hr>
		
		<article>
			<h6>Css Grid</h6>
			<div class="row">
				<div class="col-6 border">col-6</div>
				<div class="col-6 border">col-6</div>
				<div class="col-4 border">col-4</div>
				<div class="col-4 border">col-4</div>
				<div class="col-4 border">col-4</div>
			</div>

			<div class="row">
				<div class="col-3"><span class="block bg-primary-1">col-3</span></div>
				<div class="col-3"><span class="block bg-primary-1">col-3</span></div>
				<div class="col-3"><span class="block bg-primary-1">col-3</span></div>
				<div class="col-3"><span class="block bg-primary-1">col-3</span></div>
			</div>
		</article>

		<article>
			<LoadingSpinner />
		</article>

		<article>
			<h6>Forms</h6>
			<section class="my-4">
				<h6>text-field / Component</h6>

				<!-- text input -->
				<text-field label="UserId" placeholder="아이디를 입력하세요" invalid="invalid message..." />
				
			</section>

			<section class="my-4">
				<h6>text-field / Legacy</h6>

				<!-- text input -->
				<fieldset class="fieldset">
					<label for="userid">UserId</label>
					<div class="form-input invalid">
						<input id="userid" type="text" placeholder="아이디를 입력하세요" aria-placeholder="아이디를 입력하세요" />
					</div>
					<div class="flex justify-between">
						<p class="invalid-feedback shrink-0">
							invalid message...
						</p>
					</div>
				</fieldset>

			</section>
		</article>

		<article class="document">
			<h6>Toast</h6>
			<div>
				<base-button @click="showToast" label="토스트 클릭!" />

				<toast-container>
					<toast
						v-for="(toast, index) in toasts"
						:key="index"
						:id="index"
						:message="toast.message"
						:open="toast.open"
						@close="toast.open = false"
					/>
				</toast-container>
			</div>
		</article>
		<!-- bottom sheet -->
		<article class="document">
			<h6>Bottom Sheet</h6>
			<base-button @click="showBottomSheet01 = !showBottomSheet01" label="default" />
			
			<bottom-sheet v-if="showBottomSheet01" @close="showBottomSheet01 = false">
				<template #body>body</template>
				<template #footer>footer</template>
			</bottom-sheet>
		</article>
		<!-- button, toggle -->
		<article class="document">
			<h6>버튼 테스트</h6>
			<div class="flex align-center" style="gap: 1rem">
				<base-button @click="handleClick" label="Click!!!" />
				<toggle-box message="하하핳하" />
			</div>
		</article>
		<!-- images -->
		<article class="document">
			<h6>Image & Svg</h6>
			<div class="row">
				<figure class="col-sm-12 col-lg-4">
					<figcaption>png, 이미지 사용</figcaption>
					<img alt="Vue logo" src="@/assets/images/pig7.png" width="100px" />
					<pre>@/assets/images/logo.png</pre>
				</figure>

				<figure class="col-sm-12 col-lg-4">
					<figcaption>SVG inline, sprite</figcaption>
					<img inline src="@/assets/images/pig7.svg" />
					<pre>@/assets/images/pig7.svg inline</pre>
				</figure>

				<figure class="col-sm-12 col-lg-4">
					<figcaption>Image Css, background-image:url()</figcaption>
					<span class="bg-image"></span>
					<pre></pre>
				</figure>
			</div>
		</article>
	</div>
</template>

<script>
import BottomSheet from '@/components/BottomSheet';
import BaseButton from "@/components/Buttons/BaseButton";
import TextField from "@/components/Forms/TextField";
import LoadingSpinner from "@/components/LoadingSpinner";
import Toast from "@/components/Toast/Toast";
import ToastContainer from "@/components/Toast/ToastContainer";
import ToggleBox from "@/components/ToggleBox";
import { Column, Row } from "vue-grid-responsive";

	export default {
		name: "Example",
		components: {
    ToggleBox,
    BaseButton,
    Toast,
    ToastContainer,
    LoadingSpinner,
    TextField,
    Row,
    Column,
	BottomSheet,
},
		data() {
			return {
				toastId: 0,
				toasts: [],
				showBottomSheet01: false,
			};
		},
		mounted() {},
		methods: {
			handleClick(el) {
				alert(`Hello, Button!`);
			},

			showToast() {
				const newToast = {
					id: this.toastId++,
					message: `토스트 메세지를 스택으로 출력시켜보세 ${this.toastId}`,
					open: true,
				};
				this.toasts.push(newToast);
				console.log(newToast.id);

				setTimeout(() => {
					newToast.open = false;
				}, 3000);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.page-example {
		height: 1500px;
	}
	.bg-image {
		display: inline-block;
		width: 120px;
		height: 120px;
		background-image: url(@/assets/images/pig7.png);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.document {
		margin-top: 60px;
		> h6 {
			margin-bottom: 1rem;
		}
	}
</style>
