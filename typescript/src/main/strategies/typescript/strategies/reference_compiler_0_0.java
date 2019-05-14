package typescript.strategies;

import java.io.BufferedWriter;
import java.io.File;
import java.nio.charset.Charset;

import org.apache.commons.io.IOUtils;
import org.spoofax.interpreter.terms.IStrategoTerm;
import org.spoofax.terms.StrategoString;
import org.spoofax.terms.TermFactory;
import org.strategoxt.lang.Context;
import org.strategoxt.lang.Strategy;

import com.google.common.io.Files;

public class reference_compiler_0_0 extends Strategy {
	public static reference_compiler_0_0 instance = new reference_compiler_0_0();
	public IStrategoTerm invoke(Context context, IStrategoTerm current) {
		try {
			String inputProgram = ((StrategoString) current).stringValue();
			File tmpFile = File.createTempFile("tsc", ".ts");
			try (BufferedWriter writer = Files.newWriter(tmpFile, Charset.defaultCharset())) {
				writer.write(inputProgram);
				writer.flush();
			}
			long time = System.currentTimeMillis();
			Process tsc = new ProcessBuilder("tsc", "--noEmit", "--target", "ESNext", tmpFile.getAbsolutePath()).start();
			int out = tsc.waitFor();
			context.getIOAgent().printError("tsc duration: " + (System.currentTimeMillis() - time) + "ms");
			if (out == 0) return new StrategoString("success", TermFactory.EMPTY_LIST, IStrategoTerm.IMMUTABLE);
			else return new StrategoString("fail\n" + IOUtils.toString(tsc.getInputStream(), Charset.forName("utf8")), TermFactory.EMPTY_LIST, IStrategoTerm.IMMUTABLE);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
