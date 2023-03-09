const GroRoutes = [
	{
		path: "/gro",
		component: {
			render(c) {
				return c("router-view");
			},
		},
		// views
		children: [
			{
				path: "",
				name: "지로",
				component: () => import("@/views/Gro/Gro"),
			},
		],
	},
]

export default GroRoutes;