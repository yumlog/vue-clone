<template>
	<div class="page-example container">
		<article>
			<h6>Vue Grid</h6>
			<Row>
				<Column :xs="4">
					<span class="block bg-primary-1">Column</span>
				</Column>
				<Column :xs="4">
					<span class="block bg-primary-1">Column</span>
				</Column>
				<Column :xs="4">
					<span class="block bg-primary-1">Column</span>
				</Column>
			</Row>
			<hr>
			<Row>
				<Column :xs="4" :xs-offset="4">
					<span class="block bg-primary-1">Column</span>
				</Column>
				<Column :xs="4">
					<span class="block bg-primary-1">Column</span>
				</Column>
			</Row>
		</article>

		<hr>

		<article>
			<h6>Css Grid</h6>
			<div class="row">
				<div class="col-6 border">
					col-6
				</div>
				<div class="col-6 border">
					col-6
				</div>
				<div class="col-4 border">
					col-4
				</div>
				<div class="col-4 border">
					col-4
				</div>
				<div class="col-4 border">
					col-4
				</div>
			</div>

			<div class="row">
				<div class="col-3">
					<span class="block bg-primary-1">col-3</span>
				</div>
				<div class="col-3">
					<span class="block bg-primary-1">col-3</span>
				</div>
				<div class="col-3">
					<span class="block bg-primary-1">col-3</span>
				</div>
				<div class="col-3">
					<span class="block bg-primary-1">col-3</span>
				</div>
			</div>
		</article>

		<!-- 
		<article>
			<LoadingSpinner />
		</article>
		-->

		<article>
			<h6>Forms</h6>
			<section class="my-4">
				<h6 class="mb-4">text-field / Component</h6>

				<!-- text input -->
				<text-field id="userid" label="UserId" placeholder="아이디를 입력하세요" message="메세지입니다." />

			</section>

			<section class="my-4">
				<h6 class="mb-4">text-field / Legacy</h6>

				<!-- text input -->
				<div class="fieldset">
					<label for="userid">UserId</label>
					<div class="form-input invalid">
						<input
							id="userid" type="text" placeholder="아이디를 입력하세요" aria-placeholder="아이디를 입력하세요" invalid="..."
							aria-invalid="...">
					</div>
					<div class="flex justify-between">
						<p class="invalid-feedback shrink-0">
							invalid message...
						</p>
					</div>
				</div>
				<!-- // -->
			</section>
		</article>

		<article class="document">
			<h6>Toast</h6>
			<div>
				<base-button label="토스트 클릭!" @click="showToast" />

				<toast-container>
					<toast
						v-for="(toast, index) in toasts" :id="index" :key="index" :message="toast.message" :open="toast.open"
						@close="toast.open = false" />
				</toast-container>
			</div>
		</article>
		<!-- bottom sheet -->
		<article class="document">
			<h6>Bottom Sheet</h6>
			<base-button label="default" @click="showBottomSheet01 = !showBottomSheet01" />

			<bottom-sheet v-if="showBottomSheet01" @close="showBottomSheet01 = false">
				<template #body>
					body
				</template>
				<template #footer>
					footer
				</template>
			</bottom-sheet>
		</article>
		<!-- button, toggle -->
		<article class="document">
			<h6>버튼 테스트</h6>
			<div class="flex align-center" style="gap: 1rem">
				<base-button label="Click!!!" @click="handleClick" />

				<toggle-box message="하하핳하" />
			</div>
		</article>
		<!-- tooltip -->
		<article class="document">
			<h6>Tooltip</h6>
			<div class="flex align-center justify-between" style="gap: 1rem">
				<Tooltip>
					<template #label>
						<button class="btn-tooltip"><span class="sr-only">툴팁</span></button>
					</template>
					<template #popover>
						<p>기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정 메뉴에서 비밀번호를 변경하실 수 있습니다.</p>
					</template>
				</Tooltip>
				<Tooltip>
					<template #label>
						<button class="btn-tooltip small"><span class="sr-only">툴팁</span></button>
					</template>
					<template #popover>
						<p>기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정 메뉴에서 비밀번호를 변경하실 수 있습니다.</p>
					</template>
				</Tooltip>
				<Tooltip>
					<template #label>
						<p>텍스트툴팁</p>
					</template>
					<template #popover>
						<p>기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정 메뉴에서 비밀번호를 변경하실 수 있습니다.</p>
					</template>
				</Tooltip>
			</div>
		</article>
		<!-- images -->
		<article class="document">
			<h6>Image & Svg</h6>
			<div class="row">
				<figure class="col-sm-12 col-lg-4">
					<figcaption>png, 이미지 사용</figcaption>
					<img alt="Vue logo" src="@/assets/images/pig7.png" width="100px">
					<pre>@/assets/images/logo.png</pre>
				</figure>

				<figure class="col-sm-12 col-lg-4">
					<figcaption>SVG inline, sprite</figcaption>
					<img inline src="@/assets/images/pig7.svg">
					<pre>@/assets/images/pig7.svg inline</pre>
				</figure>

				<figure class="col-sm-12 col-lg-4">
					<figcaption>Image Css, background-image:url()</figcaption>
					<span class="bg-image" />
					<pre />
				</figure>
			</div>
		</article>
	</div>
</template>

<script>
import BottomSheet from "@/components/BottomSheet";
import BaseButton from "@/components/Buttons/BaseButton";
import TextField from "@/components/Forms/TextField";
import Toast from "@/components/Toast/Toast";
import ToastContainer from "@/components/Toast/ToastContainer";
import ToggleBox from "@/components/ToggleBox";
import Tooltip from "@/components/Tooltip";
import { Column, Row } from "vue-grid-responsive";

	export default {
		name: "Example",
		components: {
			ToggleBox,
			BaseButton,
			Toast,
			ToastContainer,
			// LoadingSpinner,
			TextField,
			Row,
			Column,
			BottomSheet,
			Tooltip,
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
			handleClick() {
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

	>h6 {
		margin-bottom: 1rem;
	}
}
</style>
