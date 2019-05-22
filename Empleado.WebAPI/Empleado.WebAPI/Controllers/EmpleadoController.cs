using Empleado.BOL;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace Empleado.WebAPI.Controllers
{
    public class EmpleadoController : ApiController
    {
        private EmpleadoDbEntities db = new EmpleadoDbEntities();

        // GET: api/Empleado
        public IQueryable<BOL.Empleado> GetEmpleado()
        {
            return db.Empleado;
        }

        // GET: api/Empleado/5
        [ResponseType(typeof(BOL.Empleado))]
        public async Task<IHttpActionResult> GetEmpleado(int id)
        {
            BOL.Empleado empleado = await db.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            return Ok(empleado);
        }

        // PUT: api/Empleado/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEmpleado(int id, BOL.Empleado empleado)
        {
            if (id != empleado.Id)
                return BadRequest();

            db.Entry(empleado).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleadoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Empleado
        [ResponseType(typeof(BOL.Empleado))]
        public async Task<IHttpActionResult> PostEmpleado(BOL.Empleado empleado)
        {
            db.Empleado.Add(empleado);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = empleado.Id }, empleado);
        }

        // DELETE: api/Empleado/5
        [ResponseType(typeof(BOL.Empleado))]
        public async Task<IHttpActionResult> DeleteEmpleado(int id)
        {
            BOL.Empleado empleado = await db.Empleado.FindAsync(id);
            if (empleado == null)
            {
                return NotFound();
            }

            db.Empleado.Remove(empleado);
            await db.SaveChangesAsync();

            return Ok(empleado);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmpleadoExists(int id)=> db.Empleado.Count(e => e.Id == id) > 0;
        
    }
}