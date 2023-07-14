import React from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, TextareaAutosize, Typography } from '@mui/material'

const Mice = ({ idioma }) => {
  return (
    <>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="350"
          image="/foto_mice.png"
          alt="portada mice"

        />
        {/* <Box position="absolute" top="25%" left="40%" textAlign="center" color="white"> */}
        <Box
          textAlign="center"
          position="absolute"
          top="40%"
          // left="40%"
          sx={{ left: { sm: '10%', md: '10%', lg: '20%' } }}
          // sx={{
          //   transform: 'translate(-50%, -50%)',
          // }}
          color="white" >

          <Typography variant="h1" sx={{ fontSize: 40 }}>
            {idioma ? 'Accumulate unforgettable experiences with us' : 'Acumula experiencias inolvidables junto a nosotros'}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 30, marginTop: 4, marginBottom: 5 }}>
            {idioma ? 'Check out everything we offer for you' : 'Mira todo lo que ofrecemos para ti'}
          </Typography>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241' }}>MICE</Typography>
      </Box>

      <Grid container spacing={4} paddingX={2}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <Typography variant="h1" sx={{ fontSize: 20, color: '#E89241' }}>
            {idioma ? 'Design your own experience with us!' : 'Diseña tu propia experiencia junto a nosotros!'}
            {idioma ? 'Special events, customized trips, incentive groups and meetings.' : 'Eventos especiales, viajes a medida, grupos de incentivos y reuniones.'}

          </Typography>
          <Typography variant="h4" sx={{ fontSize: 20 }}>
            {idioma ? '• Our MICE division is always creating unique experiences and meeting the needs of our clients.' : '•Nuestra división MICE siempre está creando experiencias únicas y satisfaciendo las necesidades de nuestros clientes.'}<br /><br />
            {idioma ? '• Our Team will work on each project offering personalized and detailed information to maximize your experience.' : '• Nuestro Equipo trabajará en cada proyecto ofreciendo información personalizada y detallada para maximizar su experiencia.'}<br /><br />
            {idioma ? '• When it comes to creating a unique experience in Peru, variety and innovation are the key to everything.' : '• Cuando se trata de crear una experiencia única en Perú, la variedad y la innovación son la clave de todo.'}<br /><br />
            {idioma ? '• Peru, land of hidden treasures with great geographical, cultural, historical, and gastronomic variety.' : '• Perú, tierra de tesoros escondidos con gran variedad geográfica, cultural, histórica y gastronómica.'}<br /><br />
            {idioma ? '• An incentive trip will not only be a trip to a new destination like Peru, but it will end up being a unique experience in a lifetime.' : '• Un viaje de incentivo no solo será un viaje a un nuevo destino como Perú, sino que terminará siendo una experiencia única en la vida.'}
          </Typography>
        </Grid>
      </Grid>


      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>
          {idioma ? 'Incentive Group' : 'Grupo de Incentivo'}
        </Typography>

      </Box>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography variant="h4" sx={{ fontSize: 20 }}>
            {idioma
              ? 'Incentive trips are a great way to build customer loyalty and motivate sales teams. For many years, this has been carried out, and each time a special attraction, something different and unique is sought after. We specialize in creativity, exclusivity, and dynamism, offering adventure, outdoor activities, cultural themes, gastronomy, and luxury. The final result is the success of the objectives we set for ourselves.'
              : 'Los viajes de Incentivos son una buena manera de fidelizar clientes y/o motivar a equipos de ventas. Desde muchos años esto se lleva a cabo, cada vez se busca un atractivo especial, algo diferente y único. Así mismo nosotros nos especializamos en creatividad, exclusividad y dinamismo, aventura, actividades al aire libre, temas culturales, gastronomía y lujo. El resultado final es el éxito de los objetivos que nos trazamos.'}
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>

      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241' }}>
          {idioma ? 'Unique Experiences' : 'Experiencias Únicas'}
        </Typography>
      </Box>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            {idioma
              ? 'Each of our trips is a unique and dazzling experience. Combine regions such as the coast, the highlands, and the jungle, wonderful regions full of history and culture with personalized and high-quality services. We offer the best selection of hotels in the region, the best restaurants where gastronomic fusion and culinary presentation make them unique and irresistible.'
              : 'Cada uno de nuestros viajes son experiencias únicas y deslumbrantes. Combina regiones como la costa, la sierra y la selva, regiones maravillosas y llenas de historia, cultura con servicios personalizados de gran calidad con la mejor selección de hoteles de la región, los mejores restaurantes donde la fusión gastronómica, la presentación culinaria los hacen únicos e irresistibles.'}
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Box sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>
          {idioma ? 'Specialist Team' : 'Equipo de Especialistas'}
        </Typography>
      </Box>

      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            {idioma
              ? 'We are specialists in coordination and execution, always looking for the best place to welcome participants, complemented by audiovisual services, food, accommodations, transportation, cocktails, opening dinners in historic places or museums. We take care of every detail.'
              : 'Somos los especialistas en la coordinación y ejecución siempre buscando el mejor lugar acorde para poder acoger a los participantes, complementándolo con todos los servicios de audiovisual, alimentación, alojamientos, transporte, cocteles, cenas de apertura en lugares históricos o museos. Nos encargamos de todos los detalles.'}
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>

      <Grid container spacing={4} paddingX={2}>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
      </Grid>

      <Box marginY={5} sx={{ display: 'flex', marginTop: 8, gap: 3 }}>
        <Box sx={{ width: 120, height: 40, backgroundColor: '#E89241	' }}>

        </Box>
        <Typography variant='h1' component='h1' sx={{ color: '#E89241	' }}>
          {idioma ? 'Uniting Feelings' : 'Uniendo Sentimientos'}
        </Typography>
      </Box>

      <Grid container spacing={4} paddingX={2}>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography marginY={3} variant="h4" sx={{ fontSize: 20 }}>
            {idioma
              ? 'Trips based on a special interest, inspired by a theme, unique experiences. 100% Tailored made, proposals that meet the clients’ desires. These can be educational, ecological, gastronomic, adventure, sports (soccer, marathons, yoga), experiential.'
              : 'Viajes basados en algún interés especial, inspirado en un tema, experiencias únicas. 100% Tailored made, propuestas que cumplan con los deseos de los clientes. Estos pueden ser educativos, ecológicos, gastronómicos, aventura, deportivos (Futbol, Maratones, Yoga), vivenciales.'}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ position: 'relative', marginTop: '10px', marginBottom: 30, width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src='/sinimagen.png'
              alt='mice imagen'
              objectFit="cover"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Mice