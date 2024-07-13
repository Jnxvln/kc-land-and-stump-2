export type TDebugBorder = {
	children: React.ReactNode | undefined;
	variant?: "light" | "dark" | undefined;
}

export default function DebugBorder ({ children, variant }: TDebugBorder) {
	const colors = {
		base: "border border-1",
		variant_light: "border-red-300",
		variant_default: "border-red-500",
		variant_dark: "border-red-700"
	}

  return (
	<div className={`w-full ${colors.base} ${variant === 'light' ? colors.variant_light : variant === 'dark' ? colors.variant_dark : colors.variant_dark }`}>
		{children}
	</div>
  )
}