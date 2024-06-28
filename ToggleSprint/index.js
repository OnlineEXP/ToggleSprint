const on = true
const f = new KeyBind(mc.field_71474_y.field_74351_w)
const s = new KeyBind(mc.field_71474_y.field_151444_V)

f.registerKeyDown(() => {
    if (on) s.setState(true)
})

register("command", () => {
    on = !on
    if (on) ChatLib.chat("&aEnabled ToggleSprint")
    else ChatLib.chat("&cDisabled ToggleSprint")
}).setName("togglesprint").setAliases("ts")
