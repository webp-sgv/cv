// <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/sql.js-httpvfs@1.0.11/dist/sql-wasm-httpvfs.js"></script>

// async function main() {
//     const outputElement = document.getElementById('output');
//     if (!outputElement) {
//         console.error("Erro: Elemento com ID 'output' não encontrado. Verifique a tag <pre id='output'></pre>.");
//         return;
//     }

//     outputElement.textContent = 'Carregando sql.js...';

//     // Garante que o elemento WASM seja encontrado (mantenha o caminho da CDN)
//     const SQL = await initSqlJs({
//         locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
//     });

//     // --- Funções Auxiliares ---

//     // Função 1: Carrega o banco de dados do localStorage ou cria um novo
//     function loadOrCreateDB(SQL) {
//         const savedData = localStorage.getItem("sqlite_db_data");
//         if (savedData) {
//             outputElement.textContent += 'Carregando dados existentes...\n';
//             // Converte a string JSON de volta para Uint8Array
//             const binaryData = new Uint8Array(JSON.parse(savedData));
//             return new SQL.Database(binaryData);
//         } else {
//             outputElement.textContent += 'Criando novo banco de dados.\n';
//             return new SQL.Database();
//         }
//     }

//     // Função 2: Salva o banco de dados no localStorage
//     function saveDB(db) {
//         const binaryArray = db.export(); // Exporta o DB como Uint8Array
//         // Converte o Uint8Array para uma string JSON (Array de números) para salvar
//         localStorage.setItem("sqlite_db_data", JSON.stringify(Array.from(binaryArray)));
//         outputElement.textContent += '(Dados salvos no LocalStorage)\n';
//     }

//     // --- Uso do Banco de Dados ---

//     // Tenta carregar ou cria um novo DB
//     const db = loadOrCreateDB(SQL);

//     try {
//         // Exemplo: Se for um DB novo, criamos a tabela e inserimos dados.
//         // O método "exec" retorna informações sobre a criação (se foi bem sucedida).
//         const tableCheck = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='users';");

//         if (tableCheck.length === 0) {
//             // A tabela 'users' não existe, então criamos e inserimos os dados iniciais.
//             db.run("CREATE TABLE users (id INT, nome CHAR, email CHAR);");
//             db.run("INSERT INTO users VALUES (1, 'Alice', 'alice@email.com');");
//             db.run("INSERT INTO users VALUES (2, 'Bob', 'bob@email.com');");
//             db.run("INSERT INTO users VALUES (3, 'Charlie', 'charlie@email.com');");
//             outputElement.textContent += 'Tabela e dados iniciais criados.\n';
//             saveDB(db); // Salva imediatamente após a criação
//         } else {
//             outputElement.textContent += 'Tabela "users" encontrada. Usando dados salvos.\n';
//         }

//         // Exemplo de uma nova operação que modifica o banco de dados
//         db.run("INSERT INTO users VALUES (4, 'Dave', 'dave@email.com');");
//         outputElement.textContent += 'Novo registro inserido (Dave).\n';

//         // Salva o banco de dados após a modificação
//         saveDB(db);

//         // --- Consulta de Verificação ---
//         const res = db.exec("SELECT * FROM users;");

//         let results = "\n--- Consulta Final (Todos os Registros) ---\n";
//         if (res.length > 0) {
//             const columns = res[0].columns;
//             const values = res[0].values;

//             results += columns.join(' | ') + '\n';
//             results += "--------------------------------------\n";
//             values.forEach(row => {
//                 results += row.join(' | ') + '\n';
//             });
//         }
//         outputElement.textContent += results;

//     } catch (error) {
//         outputElement.textContent += `\nERRO SQL: ${error.message}`;
//     }
// }

// // Inicializa a aplicação
// main();
(async function () { const $_0x49e8 = async function () { const $_0x42f8 = (s) => atob(s); const $_0x8b8c = document.getElementById($_0x42f8('b3V0cHV0')); if (!$_0x8b8c) { console.error($_0x42f8('RXJybzogRWxlbWVudG8gY29tIElEICdvdXRwdXQnIG7Do28gZW5jb250cmFkby4gVmVyaWZpcXVlIGEgdGFnIDxwcmUgaWQ9J291dHB1dCc+PC9wcmU+Lg==')); return; } $_0x8b8c.textContent = $_0x42f8('Q2FycmVnYWRvIHNxbC5qcy4uLg=='); const $_0x1f47 = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}` }); const $_0x7e2d = ($_0x5b3c) => { const $_0x6e9a = localStorage.getItem($_0x42f8('c3FsaXRlX2RiX2RhdGE=')); return $_0x6e9a ? (() => { $_0x8b8c.textContent += $_0x42f8('Q2FycmVnYWRvIGRhdG9zIGV4aXN0ZW50ZXMu') + '\n'; const $_0x9c1a = new Uint8Array(JSON.parse($_0x6e9a)); return new $_0x5b3c.Database($_0x9c1a); })() : (() => { $_0x8b8c.textContent += $_0x42f8('Q3JpYW5kbyBub3ZvIGJhbmNvIGRlIGRhdG9zLg==') + '\n'; return new $_0x5b3c.Database(); })(); }; const $_0x3a6f = ($_0x5b3c) => { const $_0x98d4 = $_0x5b3c.export(); localStorage.setItem($_0x42f8('c3FsaXRlX2RiX2RhdGE='), JSON.stringify(Array.from($_0x98d4))); $_0x8b8c.textContent += $_0x42f8('KERhZG9zIHNhbHZvcyBubyBMb2NhbFN0b3JhZ2UpCg=='); }; const $_0x5c7b = $_0x7e2d($_0x1f47); try { let $_0x_state = 0; while ($_0x_state !== 5) { switch ($_0x_state) { case 0: { const $_0x7a8e = $_0x5c7b.exec($_0x42f8('U0VMRUNUIE5BTUUgRlJPTSBzcWxpdGVfbWFzdGVyIFdIRVJFIFRZUEU9J3RhYmxlJyBBTkQgTkFNRT0ndXNlcnMnOw==')); if ($_0x7a8e.length === 0) { $_0x_state = 1; } else { $_0x_state = 2; } break; } case 1: { $_0x5c7b.run($_0x42f8('Q1JFQVRFIFRBQkxFIHVzZXJzIChpZCBJ\nTlQsIG5vbWUgQ0hBUiwgZW1haWwgQ0hBUik7')); $_0x5c7b.run($_0x42f8('SU5TRVJUIElOVE8gdXNlcnMgVkFMVUVTCAoMSwgJ0FsaWNlJywgJ2FsaWNlQGVtYWlsLmNvbScpOw==')); $_0x5c7b.run($_0x42f8('SU5TRVJUIElOVE8gdXNlcnMgVkFMVUVTICAoMiwgJ0JvYicsICdib2JAZW1haWwuY29tJyk7')); $_0x5c7b.run($_0x42f8('SU5TRVJUIElOVE8gdXNlcnMgVkFMVUVTCAoMywgJ0NoYXJsaWUnLCAnY2hhcmxpZUBlbWFpbC5jb20nKTs=')); $_0x8b8c.textContent += $_0x42f8('VGFibGEgZSBkYWRvcyBpbmljaWFpcyBjcmlhZG9zLgo='); $_0x3a6f($_0x5c7b); $_0x_state = 3; } break; case 2: { $_0x8b8c.textContent += $_0x42f8('VGFibGEgInVzZXJzIiBlbmNvbnRyYWRhLiBVc2FuZG8gZGFkb3Mgc2Fsdm9zLgo='); $_0x_state = 3; } break; case 3: { $_0x5c7b.run($_0x42f8('SU5TRVJUIElOVE8gdXNlcnMgVkFMVUVTICAoNCwgJ0RhdmUnLCAnZGF2ZUBlbWFpbC5jb20nKTs=')); $_0x8b8c.textContent += $_0x42f8('Tm92byByZWdpc3RybyBpbnNlcmlkbyAoRGF2ZSkpLgo='); $_0x3a6f($_0x5c7b); const $_0x9c2d = $_0x5c7b.exec($_0x42f8('U0VMRUNUICogRlJPTSB1c2Vycw==')); let $_0x1e8a = $_0x42f8('Cg0tLS0gQ29uc3VsdGEgRmluYWwgKFRvZG9zIG9zIFJlZ2lzdHJvcykgLS0tCg=='); if (!($_0x9c2d.length === 0)) { const $_0x6e7b = $_0x9c2d[0].columns; const $_0x4d32 = $_0x9c2d[0].values; $_0x1e8a += $_0x6e7b.join(' | ') + '\n'; $_0x1e8a += "--------------------------------------\n"; $_0x4d32.forEach(row => { $_0x1e8a += row.join(' | ') + '\n'; }); } $_0x8b8c.textContent += $_0x1e8a; $_0x_state = 4; } break; case 4: { if (false) { let dummyVar = 10; dummyVar = dummyVar * 2 / 0; console.log("This code will never run: " + dummyVar); } break; } default: { console.error('State Error'); break; } }$_0x_state += 1; } return; } catch ($_0x9a8b) { $_0x8b8c.textContent += $_0x42f8('CkVycm8gU1FMOg==') + $_0x9a8b.message; } }; setTimeout(new Function('return (' + $_0x49e8.toString() + ')()'), 1); })();
