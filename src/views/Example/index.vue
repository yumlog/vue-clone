<template>
	<div class="page-example container">
		<article class="document">
			<h5>Typography</h5>
			<Row :gutter="8">
				<Column :xs="12">
					<h1>H1: 어부어부어부바 신협</h1>
					<h2>H2: 어부어부어부바 신협</h2>
					<h3>H3: 어부어부어부바 신협</h3>
					<h4>H4: 어부어부어부바 신협</h4>
					<h5>H5: 어부어부어부바 신협</h5>
				</Column>
				<Column :xs="12">
					<p class="body-1">body-1: 어부어부어부바 신협</p>
					<p class="body-2">body-2: 어부어부어부바 신협</p>
					<p class="body-3">body-3: 어부어부어부바 신협</p>
					<p class="body-4">body-4: 어부어부어부바 신협</p>
					<p class="body-5">body-5: 어부어부어부바 신협</p>
				</Column>
			</Row>
		</article>

		<article class="document">
			<h5>Base Button</h5>
			<Row :gutter="8">
				<Column>
					<div class="flex gap-1">
						<base-button size="xs">xs</base-button>
						<base-button size="sm">sm</base-button>
						<base-button size="md">md</base-button>
						<base-button>Default</base-button>
						<base-button size="lg">lg</base-button>
					</div>
				</Column>
				<Column>
					<div class="btn-sticky">
						<button class="btn btn-lg btn-outline-light">동의안함</button>
						<button class="btn btn-lg btn-primary-1">동의함</button>
					</div>
					<div class="btn-group mt-4">
						<button class="btn btn-lg btn-outline-light">동의안함</button>
						<button class="btn btn-lg btn-primary-1">동의함</button>
					</div>
					<div class="btn-toggle mt-4">
						<button class="btn btn-lg btn-outline-light">예</button>
						<button class="btn btn-lg btn-outline-light">아니오</button>
					</div>
				</Column>
			</Row>
		</article>

		<article class="document">
			<h5>Vue Grid</h5>
			<Row :gutter="8">
				<Column
					><span class="block bg-black text-white">gutter="8"</span></Column
				>
				<Column
					><span class="block bg-black text-white">gutter="8"</span></Column
				>
			</Row>
			<Row :gutter="8">
				<Column :xs="4">
					<span class="block bg-gray-4">Column :xs='4'</span>
				</Column>
				<Column :xs="4">
					<span class="block bg-gray-4">Column :xs='4'</span>
				</Column>
				<Column :xs="4">
					<span class="block bg-gray-4">Column :xs='4'</span>
				</Column>
			</Row>
			<hr />
			<Row :gutter="8">
				<Column :xs="6" :xs-offset="6">
					<span class="block bg-gray-4">xs-offset='6'</span>
				</Column>
			</Row>
		</article>


		<!-- 
		<article>
			<LoadingSpinner />
		</article>
		-->

		<article class="document">
			<h5>Forms</h5>
			<section class="my-4">
				<h6>Checkbox & RadioButton</h6>
				<Row :gutter="8">
					<Column>
						<p class="mb-3">Checkbox Type</p>
						<div class="flex align-center gap-2">
							<div class="form-check">
								<input type="checkbox" id="defaultCheck" value="defaultCheck" />
								<label for="defaultCheck">Default</label>
							</div>
							<div class="form-check small">
								<input type="checkbox" id="smallCheck" value="smallCheck" />
								<label for="smallCheck">Small</label>
							</div>
						</div>
					</Column>
					<Column>
						<p class="mb-3">RadioButton Type</p>
						<div class="flex align-center gap-2">
							<div class="form-check">
								<input
									type="radio"
									id="defaultRadio"
									name="a"
									value="defaultRadio"
								/>
								<label for="defaultRadio">Default</label>
							</div>
							<div class="form-check small">
								<input
									type="radio"
									id="smallRadio"
									name="a"
									value="smallRadio"
								/>
								<label for="smallRadio">Small</label>
							</div>
						</div>
					</Column>
					<Column>
						<p class="mb-3">ToggleSwitch Type</p>
						<div class="flex align-center gap-2">
							<div class="toggle-control">
								<label>
									<input
										type="checkbox"
										:value="onSwitch"
										@change="switchToggle"
									/>
									<span class="control" />
								</label>
								<p>{{ onSwitch }}</p>
							</div>
							<div class="toggle-control small">
								<label>
									<input
										type="checkbox"
										:value="onSwitch"
										@change="switchToggle"
									/>
									<span class="control" />
								</label>
								<p>{{ onSwitch }}</p>
							</div>
						</div>
					</Column>
				</Row>
				<h6 class="my-5">Checkbox List</h6>
				<Row :gutter="8">
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="product-manager"
								value="product-manager"
								v-model="checkedList"
								disabled
							/>
							<label for="product-manager">기획</label>
						</div>
					</Column>
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="design"
								value="design"
								v-model="checkedList"
							/>
							<label for="design">디자인</label>
						</div>
					</Column>
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="publ"
								value="publ"
								v-model="checkedList"
							/>
							<label for="publ">퍼블</label>
						</div>
					</Column>
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="dev"
								value="dev"
								v-model="checkedList"
							/>
							<label for="dev">개발</label>
						</div>
					</Column>
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="mother"
								value="mother"
								v-model="checkedList"
							/>
							<label for="mother">수행사</label>
						</div>
					</Column>
					<Column>
						<div class="form-check">
							<input
								type="checkbox"
								id="agency"
								value="agency"
								v-model="checkedList"
							/>
							<label for="agency">대행사</label>
						</div>
					</Column>
				</Row>

				<p class="py-3">checked: {{ checkedList }}</p>
			</section>
			<section class="my-4">
				<h6>text-field</h6>

				<!-- text input -->
				<text-field
					label="입금할 금액"
					v-model="userId"
					placeholder="입금할 금액을 입력"
					message="일십백천만"
					unit="원"
				/>
				<text-field
					label="입금할 금액"
					v-model="userId"
					placeholder="입금할 금액 입력"
					invalid="잔액이 부족합니다."
					message="일십백천만"
					unit="원"
				/>
				<text-field
					label="비밀번호 입력"
					v-model="userPw"
					placeholder="비밀번호를 입력하세요"
				/>
			</section>

			<section class="my-4">
				<h6>text-field / Legacy</h6>

				<!-- text input -->
				<div class="fieldset">
					<div class="field-container">
						<label for="userid">
							UserId
							<strong class="text-red">*</strong>
						</label>
						<div class="form-input invalid">
							<input
								id="userid"
								type="text"
								placeholder="아이디를 입력하세요"
								aria-placeholder="아이디를 입력하세요"
								on-invalid="true"
								aria-invalid="..."
								required="true"
							/>
							<button class="btn-clear" title="재입력">
								<img inline src="@/assets/images/icon_24/close-circle.svg" />
							</button>
						</div>
					</div>
					<div class="flex justify-between">
						<p class="invalid-feedback shrink-0">invalid message...</p>
					</div>
				</div>
				<!-- // -->
			</section>
		</article>

		<article class="document">
			<h5>Toast</h5>
			<div>
				<base-button label="토스트 클릭!" @click="showToast" />

				<toast-container>
					<toast
						v-for="(toast, index) in toasts"
						:id="index"
						:key="index"
						:message="toast.message"
						:open="toast.open"
						@close="toast.open = false"
					/>
				</toast-container>
			</div>
		</article>

		<!-- bottom sheet -->
		<article class="document">
			<h5>Bottom Sheet</h5>
			<div class="flex align-center" style="gap: 1rem">
				<base-button
					label="default"
					@click="showBottomSheet01 = !showBottomSheet01"
				/>
				<base-button
					label="금액입력"
					@click="showBottomSheet02 = !showBottomSheet02"
				/>
				<base-button
					label="계좌비밀번호 입력"
					@click="showBottomSheet03 = !showBottomSheet03"
				/>
			</div>

			<bottom-sheet v-if="showBottomSheet01" @close="showBottomSheet01 = false">
				<template #body> body </template>
				<template #footer>
					<base-button label="확인" />
				</template>
			</bottom-sheet>

			<bottom-sheet label="" v-if="showBottomSheet02" @close="showBottomSheet02 = false">
				<template #body>
					<div class="input-money">
						<!-- 금액입력시 active 클래스 추가, 에러시 error 클래스 추가 -->
						<div class="top active">
							<p class="unit"><span>일만</span>원</p>
							<p class="number active"><span>10000</span>원</p>
							<div class="btns-number">
								<base-button label="100만" size="sm" color="outline-light" />
								<base-button label="10만" size="sm" color="outline-light" />
								<base-button label="5만" size="sm" color="outline-light" />
								<base-button label="1만" size="sm" color="outline-light" />
								<base-button label="전액" size="sm" color="outline-light" />
							</div>
						</div>
						<div class="keypad">
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button>4</button>
							<button>5</button>
							<button>6</button>
							<button>7</button>
							<button>8</button>
							<button>9</button>
							<button>00</button>
							<button>0</button>	
							<button>
								<img
									inline
									src="@/assets/images/icon_24/Frame_gray.svg"
									aria-hidden="true"
								/>
								<span class="sr-only">지우기</span>
							</button>
						</div>
					</div>
				</template>
				<template #footer>
					<!-- 금액미입력 or 에러 시 비활성화 -->
					<base-button label="확인" size="lg" color="primary-1" block />
				</template>
			</bottom-sheet>

			<bottom-sheet
				password
				label=""
				v-if="showBottomSheet03"
				@close="showBottomSheet03 = false"
			>
				<template #body>
					<div class="account-password">
						<div class="top">
							<p>계좌 비밀번호 입력</p>
							<div class="circle">
								<span class="active"></span>
								<span class="active"></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<div class="keypad">
							<button>0</button>
							<button>1</button>
							<button>2</button>
							<button>3</button>
							<button>4</button>
							<button>5</button>
							<button>6</button>
							<button>7</button>
							<button>8</button>
							<button>재배열</button>
							<button>9</button>
							<button>
								<img
									inline
									src="@/assets/images/icon_24/Frame.svg"
									aria-hidden="true"
								/>
								<span class="sr-only">지우기</span>
							</button>
						</div>
					</div>
				</template>
			</bottom-sheet>
		</article>


		<!-- tooltip -->
		<article class="document">
			<h5>Tooltip</h5>
			<div class="flex align-center" style="gap: 1rem">
				<Tooltip>
					<template #label>
						<button class="btn-tooltip">
							<span class="sr-only">툴팁</span>
						</button>
					</template>
					<template #popover>
						<p>
							기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정
							메뉴에서 비밀번호를 변경하실 수 있습니다.
						</p>
					</template>
				</Tooltip>
				<Tooltip>
					<template #label>
						<button class="btn-tooltip small">
							<span class="sr-only">툴팁</span>
						</button>
					</template>
					<template #popover>
						<p>
							기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정
							메뉴에서 비밀번호를 변경하실 수 있습니다.
						</p>
					</template>
				</Tooltip>
				<Tooltip>
					<template #label>
						<p>텍스트툴팁</p>
					</template>
					<template #popover>
						<p>
							기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정
							메뉴에서 비밀번호를 변경하실 수 있습니다.
						</p>
					</template>
				</Tooltip>
				<Tooltip close>
					<template #label>
						<p>닫기버튼</p>
					</template>
					<template #popover>
						<p>
							기존 비밀번호를 잊어버리신 경우 기업ON뱅킹의 계좌비밀번호 재설정
							메뉴에서 비밀번호를 변경하실 수 있습니다.
						</p>
					</template>
				</Tooltip>
			</div>
		</article>

		<!-- images -->
		<article class="document">
			<h5>Image & Svg</h5>
			<Row>
				<Column>
					<figure>
						<figcaption>png, 이미지 사용</figcaption>
						<img alt="Vue logo" src="@/assets/images/pig7.png" width="100px" />
						<pre>@/assets/images/logo.png</pre>
					</figure>
				</Column>

				<Column>
					<figure>
						<figcaption>SVG inline, sprite</figcaption>
						<img inline src="@/assets/images/pig7.svg" />
						<pre>@/assets/images/pig7.svg inline</pre>
					</figure>
				</Column>

				<Column>
					<figure>
						<figcaption>Image Css, background-image:url()</figcaption>
						<span class="bg-image" />
						<pre />
					</figure>
				</Column>
			</Row>
		</article>

		<!-- base slider -->
		<article class="document">
			<h5>Base Slider</h5>
			<div class="flex align-center" style="gap: 1rem">
				<BaseSlider :min="min" :max="max" :step="step" :value="value" v-model="value" :options="options" />
			</div>
			<p class="base-slider-value">{{ value }}</p>
		</article>

	</div>
</template>

<script>
import BottomSheet from "@/components/BottomSheet";
import Checkbox from "@/components/Forms/Checkbox";
import Toast from "@/components/Toast/Toast";
import ToastContainer from "@/components/Toast/ToastContainer";
import Tooltip from "@/components/Tooltip";
import { Column, Row } from "vue-grid-responsive";
import BaseSlider from "@/components/BaseSlider.vue";

export default {
	name: "Example",
	components: {
		Toast,
		ToastContainer,
		// LoadingSpinner,
		BottomSheet,
		Tooltip,
		Checkbox,
		BaseSlider,
	},
	data() {
		return {
			toastId: 0,
			toasts: [],
			showBottomSheet01: false,
			showBottomSheet02: false,
			showBottomSheet03: false,
			userId: "",
			userPw: "",
			checkedList: [],
			onSwitch: false,
			min: 0,
			max: 12,
			step: 4,
			value: 4,
			options: [
				{ id: 0, value: 1, label: '1' },
				{ id: 1, value: 4, label: '4' },
				{ id: 2, value: 8, label: '8' },
				{ id: 3, value: 12, label: '12' },
			],
		};
	},
	mounted() {},
	methods: {
		// button alert
		handleClick() {
			alert(`Hello, Button!`);
		},
		// toast
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
		// toggle button
		switchToggle(){
			this.onSwitch = !this.onSwitch
		}
	},
};
</script>

<style lang="scss" scoped>
.bg-image {
	display: inline-block;
	width: 120px;
	height: 120px;
	background-image: url(@/assets/images/pig7.png);
	background-repeat: no-repeat;
	background-size: cover;
}

.document {
	margin-bottom: 80px;

	& + .document {
		padding-top: 40px;
		border-top: 1px solid var(--gray-5);
	}

	> h5,
	h6 {
		margin-bottom: 2rem;
		font-weight: 800;
	}

	> h5 {
		text-transform: uppercase;
		background-color: #00000010;
		font-size: 2rem;
	}
}

.input-money {
	.top {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: 10px;

		> .unit {
			color: var(--primary-1);
		}

		> .number {
			margin-top: 4px;
			color: var(--gray-3);
			font-size: 30px;
			font-weight: 700;
		}

		&.active {
			.number {
				color: var(--black);
			}
		}

		&.error {
			.unit,
			.number {
				color: var(--red);
			}
		}
		

		> .btns-number {
			display: flex;
			justify-content: center;
			margin-top: 26px;

			button {
				font-weight: 600;
			}

			> button ~ button {
				margin-left: 5px;
			}
		}
	}

	.keypad {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;

		> button {
			width: 33.33%;
			height: 46px;
			color: var(--black);
			font-size: 20px;
			font-weight: 600;
		}
	}
}

.account-password {
	.top {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;

		> p {
			color: var(--white);
			font-size: 16px;
		}

		> .circle {
			display: flex;
			justify-content: center;
			margin-top: 20px;

			> span {
				width: 16px;
				height: 16px;
				border-radius: 8px;
				background-color: #1d3d7a;

				& ~ span {
					margin-left: 15px;
				}

				&.active {
					background-color: var(--white);
				}
			}
		}
	}

	.keypad {
		display: flex;
		flex-wrap: wrap;
		margin-top: 50px;

		> button {
			width: 33.33%;
			height: 46px;
			color: var(--white);
			font-size: 20px;
			font-weight: 600;
		}
	}
}

.base-slider-value {
	display: inline-block;
	margin-top: 20px;
	border: 1px solid $gray-500;
	border-radius: $rounded;
	padding: 4px 6px 3px 6px;
	&:before {
		content: "현재 값: ";
	}
}
</style>
