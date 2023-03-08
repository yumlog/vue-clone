const ApvRoutes = [
	{
		path: "/apv",
		name: "결재",
		component: {
			render(c) {
				return c("router-view");
			},
		},
		// views
		children: [
			{
				path: "",
				name: "결재 페이지",
				component: () => import("@/views/Apv/Apv"),
			},
		],
	},
];

export default ApvRoutes