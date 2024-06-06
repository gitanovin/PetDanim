const sliderConfig = [
    {
        perPage: 4,
        type: 'loop',
        direction: 'rtl',
        gap: '20px',
        breakpoints: {
            400: {
                perPage: 1,
                padding: '4rem',
                gap: '1rem',
            },
            640: {
                perPage: 1,
                padding: '4rem',
                gap: '1rem',
            },
            768: {
                perPage: 2,
                padding: '4rem',
                gap: '1rem',
            },
            819: {
                perPage: 2,
                padding: '4rem',
                gap: '1rem',
            },
            1080: {
                perPage: 3,
                padding: '4rem',
                gap: '1rem',
            },
        },
    },
    {
        perPage: 3,
        type: 'loop',
        direction: 'rtl',
        gap: '20px',
        //   padding: '0',
        //   focus: 'center',
        breakpoints: {
            400: {
                perPage: 1,
                padding: '2rem',
                gap: '1rem',
            },
            640: {
                perPage: 1,
                padding: '2rem',
                gap: '1rem',
            },
            768: {
                perPage: 1,
                padding: '2rem',
                gap: '1rem',
            },
        },
    }
]

export default sliderConfig;