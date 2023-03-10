<template>
    <div class="tooltip-wrap">
        <v-popover
            :placement="position"
            :boundariesElement="boundariesElement"
            :open="open"
            :handleResize="handleResize"
            :container="container"
        >
            <div class="label-wrap">
                <slot name="label"></slot>
            </div>
            <template slot="popover">
                <div class="content" :class="[{close: close == true}, {error: error == true}]">
                    <div class="arrow" aria-hidden="true"></div>
                    <slot name="popover"></slot>
                    <button v-close-popover class="btn-close">
                        <span class="sr-only">닫기</span>
                    </button>
                </div>
            </template>
        </v-popover>
    </div>
</template>

<script>
import Vue from 'vue';
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

export default {
    props: {
        open: Boolean,
        close: Boolean,
        error: Boolean,
    },
    data() {
        return {
            position: 'auto-start',
            boundariesElement: '.label-wrap',
            handleResize: true,
            container: '.label-wrap',
        }
    }
}
</script>

<style lang="scss">
.tooltip {
    left: -6px !important;
    z-index: 100 !important;
    min-width: 168px;
    max-width: 220px;

    .tooltip-inner {
        .content {
            position: relative;
            width: 100%;
            padding: 12px 12px 12px;
            margin: 0;
            border-radius: 8px;
            background-color: #2a3143;
            font-size: 14px;
            font-weight: 500;
            line-height: 19.6px;
            word-break: keep-all;
            box-sizing: border-box;

            .btn-close {
                display: none;
                position: absolute;
                top: 12px;
                right: 12px;
                width: 20px;
                height: 20px;
                background: url('@/assets/images/icon_20/close_white.png') center no-repeat;
                background-size: 100%;
                cursor: pointer;
            }

            &.close {
                padding-right: 34px;

                .btn-close {
                    display: block;
                }
            }
        }

        p {
            color: $white;
            word-break: break-all;
        }

        &.error {
            margin-top: -1px;
            padding-top: 0;
            padding-bottom: 4px;
            border-top: 5px solid var(--red);
            background-color: var(--red);
        }
    }
}

.btn-tooltip {
    width: 24px;
    height: 24px;
    background: url('@/assets/images/icon_24/info.png') center no-repeat;
    background-size: 100%;
    cursor: pointer;

    &.small {
        width: 18px;
        height: 18px;
    }
}

.tootip-wrap {
    
    .v-popover {
        display: flex;
        align-items: center;
        width: 24px !important;
        
        .label-wrap {
            cursor: pointer;
        }
    }
    
}

.tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #2a3143;
    z-index: 1;
}

.tooltip {
    &[x-placement^="top"] {
        margin-bottom: 5px;

        .tooltip-arrow {
            border-width: 5px 5px 0 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
            bottom: -4px;
            left: calc(50% - 5px);
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &[x-placement^="bottom"] {
        margin-top: 5px;
        margin-left: 7px;

        .tooltip-arrow {
            border-width: 0 5px 5px 5px;
            border-left-color: transparent !important;
            border-right-color: transparent !important;
            border-top-color: transparent !important;
            top: -4px;
            left: calc(50% - 5px);
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    &[x-placement^="right"] {
        margin-left: 10px;

        .tooltip-arrow {
            border-width: 5px 5px 5px 0;
            border-left-color: transparent !important;
            border-top-color: transparent !important;
            border-bottom-color: transparent !important;
            left: -4px;
            top: calc(50% - 5px);
            margin-left: 0;
            margin-right: 0;
        }
    }

    &[x-placement^="left"] {
        margin-right: 5px;

        .tooltip-arrow {
            border-width: 5px 0 5px 5px;
            border-top-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
            right: -4px;
            top: calc(50% - 5px);
            margin-left: 0;
            margin-right: 0;
        }
    }

    &[x-placement^="left-start"] {
        margin-right: 5px;

        .tooltip-arrow {
            border-width: 5px 0 5px 5px;
            border-top-color: transparent !important;
            border-right-color: transparent !important;
            border-bottom-color: transparent !important;
            right: -4px;
            top: calc(50% - 5px);
            margin-left: 0;
            margin-right: 0;
        }
    }
}
</style>