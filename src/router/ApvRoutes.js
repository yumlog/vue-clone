const ApvRoutes = [
	{
		path: "/apv",
		component: {
			render(c) {
				return c("router-view");
			},
		},
		// views
		children: [
			{
				path: "",
				name: "결재",
				component: () => import("@/views/Apv/Apv"),
			},
		],
	},
];

export default ApvRoutes;
