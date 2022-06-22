// B10K-1 Joystick

module.exports = {
    nets: {
        A: undefined,
        B: undefined,
        VCC: 'VCC',
        GND: 'GND'
    },
    params: {
        class: 'JOY'
    },
    body: p => `
        (module joystick (layer F.Cu)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS) 
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${'' /* component outline */}
            (fp_rect (start -8.75 -8.75) (end 8.75 8.75) (layer Dwgs.User) (width 0.12) (fill none))

            ${'' /* pin names */}
            (pad GND thru_hole circle (at 8.6 -2) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.GND.str})
            (pad GND thru_hole circle (at -2 -8.6) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.GND.str})
            (pad VCC thru_hole circle (at 8.6 2) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.VCC.str})
            (pad VCC thru_hole circle (at 2 -8.6) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.VCC.str})
            (pad A thru_hole circle (at 0 -8.6) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.A.str})
            (pad B thru_hole circle (at 8.6 0) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.net.B.str})

            ${'' /* legs */}
            (pad "" np_thru_hole circle (at -6 -6) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
            (pad "" np_thru_hole circle (at 6 6) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        )
    `
}